import { inject as service } from '@ember/service';
import GlimmerComponent from '@glimmer/component';
import { action } from '@ember/object';
import debugLogger from 'ember-debug-logger';
import THREEPerformance from 'visualization/utils/threejs-performance';
import THREE from 'three';
import Configuration from 'visualization/services/configuration';

import updateCameraZoom from 'visualization/utils/landscape-rendering/zoom-calculator';
import * as CommunicationRendering from
  'visualization/utils/landscape-rendering/communication-rendering';
import ImageLoader from 'visualization/utils/three-image-loader';
import AlertifyHandler from 'visualization/utils/alertify-handler';
import NodeMesh from 'visualization/view-objects/3d/landscape/node-mesh';
import ApplicationMesh from 'visualization/view-objects/3d/landscape/application-mesh';
import PlaneLayout from 'visualization/view-objects/layout-models/plane-layout';
import PlaneMesh from 'visualization/view-objects/3d/landscape/plane-mesh';
import { restartableTask, task } from 'ember-concurrency-decorators';
import { tracked } from '@glimmer/tracking';
import LandscapeObject3D from 'visualization/view-objects/3d/landscape/landscape-object-3d';
import Labeler from 'visualization/utils/landscape-rendering/labeler';
import BaseMesh from 'visualization/view-objects/3d/base-mesh';
import { Application, Node } from 'visualization/utils/landscape-schemes/structure-data';
import computeApplicationCommunication from 'visualization/utils/landscape-rendering/application-communication-computer';
import { LandscapeData } from 'visualization/controllers/visualization';
import { perform } from 'ember-concurrency-ts';
import ElkConstructor, { ELK, ElkNode } from 'elkjs/lib/elk-api';
import { Position2D } from 'visualization/modifiers/interaction-modifier';
import HammerInteraction from 'visualization/utils/hammer-interaction';

interface Args {
  readonly id: string;
  readonly landscapeData: LandscapeData;
  readonly font: THREE.Font;
  readonly visualizationPaused: boolean;
  showApplication(application: Application): void;
  openDataSelection(): void;
  toggleVisualizationUpdating(): void;
  switchToVR(): void;
}

interface SimplePlaneLayout {
  height: number;
  width: number;
  positionX: number;
  positionY: number;
}

type PopupData = {
  mouseX: number,
  mouseY: number,
  entity: Node | Application,
};

export type Point = {
  x: number,
  y: number
};

export interface Layout1Return {
  graph: ElkNode,
  modelIdToPoints: Map<string, Point[]>,
}

export interface Layout3Return {
  modelIdToLayout: Map<string, SimplePlaneLayout>,
  modelIdToPoints: Map<string, Point[]>,
}

/**
* Renderer for landscape visualization.
*
* @class Landscape-Rendering-Component
* @extends GlimmerComponent
*
* @module explorviz
* @submodule visualization.rendering
*/
export default class LandscapeRendering extends GlimmerComponent<Args> {
  // #region CLASS FIELDS AND GETTERS

  @service('configuration')
  configuration!: Configuration;

  @service()
  worker!: any;

  scene!: THREE.Scene;

  webglrenderer!: THREE.WebGLRenderer;

  @tracked
  hammerInteraction: HammerInteraction;

  @tracked
  camera!: THREE.PerspectiveCamera;

  canvas!: HTMLCanvasElement;

  debug = debugLogger('LandscapeRendering');

  // Incremented every time a frame is rendered
  animationFrameId = 0;

  // Is set to false until first landscape is rendered
  initDone: boolean;

  // Used to display performance and memory usage information
  threePerformance: THREEPerformance | undefined;

  // Maps models to a computed layout
  modelIdToPlaneLayout: Map<string, PlaneLayout> | null = null;

  // Extended Object3D which manages landscape meshes
  readonly landscapeObject3D: LandscapeObject3D;

  // Provides functions to label landscape meshes
  readonly labeler = new Labeler();

  readonly imageLoader: ImageLoader = new ImageLoader();

  hoveredObject: BaseMesh | null = null;

  get rightClickMenuItems() {
    const pauseItemtitle = this.args.visualizationPaused ? 'Resume Visualization' : 'Pause Visualization';

    return [
      { title: 'Reset View', action: this.resetView },
      { title: pauseItemtitle, action: this.args.toggleVisualizationUpdating },
      { title: 'Open Sidebar', action: this.args.openDataSelection },
      { title: 'Enter VR', action: this.args.switchToVR },
    ];
  }

  readonly elk: ELK;

  @tracked
  popupData: PopupData | null = null;

  spheres: Map<string, Array<THREE.Mesh>> = new Map();

  spheresIndex = 0;

  get font() {
    return this.args.font;
  }

  // #endregion CLASS FIELDS AND GETTERS

  // #region COMPONENT AND SCENE INITIALIZATION

  constructor(owner: any, args: Args) {
    super(owner, args);
    this.initDone = false;
    this.debug('Constructor called');

    this.render = this.render.bind(this);
    this.hammerInteraction = HammerInteraction.create();

    this.landscapeObject3D = new LandscapeObject3D(this.args.landscapeData.structureLandscapeData);

    this.elk = new ElkConstructor({
      workerUrl: './assets/web-workers/elk-worker.min.js',
    });
  }

  @action
  canvasInserted(canvas: HTMLCanvasElement) {
    this.debug('Canvas inserted');

    this.canvas = canvas;
    this.hammerInteraction.setupHammer(canvas);

    canvas.oncontextmenu = (e) => {
      e.preventDefault();
    };
  }

  @action
  async outerDivInserted(outerDiv: HTMLElement) {
    this.debug('Outer Div inserted');

    this.initThreeJs();
    this.render();

    this.resize(outerDiv);

    await perform(this.loadNewLandscape);
    this.initDone = true;
  }

  /**
   * Calls all three related init functions and adds the three
   * performance panel if it is activated in user settings
   */
  initThreeJs() {
    this.initScene();
    this.initCamera();
    this.initRenderer();
    this.initLights();

    /*
    const showFpsCounter = this.currentUser.getPreferenceOrDefaultValue('flagsetting',
      'showFpsCounter');

    if (showFpsCounter) {
      this.threePerformance = new THREEPerformance();
    } */
  }

  /**
   * Creates a scene, its background and adds a landscapeObject3D to it
   */
  initScene() {
    this.scene = new THREE.Scene();
    this.scene.background = this.configuration.landscapeColors.background;

    this.scene.add(this.landscapeObject3D);

    this.debug('Scene created');
  }

  /**
   * Creates a PerspectiveCamera according to canvas size and sets its initial position
   */
  initCamera() {
    const { width, height } = this.canvas;
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.set(0, 0, 0);
    this.debug('Camera added');
  }

  /**
   * Initiates a WebGLRenderer
   */
  initRenderer() {
    const { width, height } = this.canvas;

    this.webglrenderer = new THREE.WebGLRenderer({
      antialias: true,
      canvas: this.canvas,
    });
    this.webglrenderer.setPixelRatio(window.devicePixelRatio);
    this.webglrenderer.setSize(width, height);
    this.debug('Renderer set up');
  }

  /**
   * Creates a DirectionalLight and adds it to the scene
   */
  initLights() {
    this.debug('Lights added');
  }

  // #endregion COMPONENT AND SCENE INITIALIZATION

  // #region COLLABORATIVE

  @action
  setPerspective(position: number[] /* , rotation: number[] */) {
    this.camera.position.fromArray(position);
  }

  // #endregion COLLABORATIVE

  // #region RENDERING LOOP

  /**
   * Main rendering function
   */
  render() {
    if (this.isDestroyed) { return; }

    const animationId = requestAnimationFrame(this.render);
    this.animationFrameId = animationId;

    if (this.threePerformance) {
      this.threePerformance.threexStats.update(this.webglrenderer);
      this.threePerformance.stats.begin();
    }

    this.webglrenderer.render(this.scene, this.camera);

    this.scaleSpheres();

    if (this.threePerformance) {
      this.threePerformance.stats.end();
    }
  }

  scaleSpheres() {
    this.spheres.forEach((sphereArray) => {
      for (let i = 0; i < sphereArray.length; i++) {
        const sphere = sphereArray[i];
        sphere.scale.multiplyScalar(0.98);
        sphere.scale.clampScalar(0.01, 1);
      }
    });
  }

  @action
  repositionSphere(vec: THREE.Vector3, user: string, color: string) {
    let spheres = this.spheres.get(user);
    if (!spheres) {
      spheres = this.createSpheres(color);
      this.spheres.set(user, spheres);
    }

    // TODO independent sphereIndex for each user?
    spheres[this.spheresIndex].position.copy(vec);
    spheres[this.spheresIndex].scale.set(1, 1, 1);
    this.spheresIndex = (this.spheresIndex + 1) % spheres.length;
  }

  createSpheres(color: string): Array<THREE.Mesh> {
    const spheres = [];
    const sphereGeometry = new THREE.SphereBufferGeometry(0.08, 32, 32);
    const sphereMaterial = new THREE.MeshBasicMaterial({ color });

    for (let i = 0; i < 30; i++) {
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      this.scene.add(sphere);
      spheres.push(sphere);
    }
    return spheres;
  }

  // #endregion RENDERING LOOP

  // #region COMPONENT AND SCENE CLEAN-UP

  /**
 * This overridden Ember Component lifecycle hook enables calling
 * ExplorViz's custom cleanup code.
 *
 * @method willDestroy
 */
  willDestroy() {
    super.willDestroy();
    cancelAnimationFrame(this.animationFrameId);

    // Clean up WebGL rendering context by forcing context loss
    const gl = this.canvas.getContext('webgl');
    if (!gl) {
      return;
    }
    const glExtension = gl.getExtension('WEBGL_lose_context');
    if (!glExtension) return;
    glExtension.loseContext();

    if (this.threePerformance) {
      this.threePerformance.removePerformanceMeasurement();
    }

    this.debug('cleanup landscape rendering');

    // Clean up all remaining meshes
    this.landscapeObject3D.removeAllChildren();
    this.labeler.clearCache();
  }

  // #endregion COMPONENT AND SCENE CLEAN-UP

  // #region ACTIONS

  @action
  resize(outerDiv: HTMLElement) {
    const width = Number(outerDiv.clientWidth);
    const height = Number(outerDiv.clientHeight);

    // Update renderer and camera according to canvas size
    this.webglrenderer.setSize(width, height);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  }

  /**
 * Inherit this function to update the scene with a new renderingModel. It
 * automatically removes every mesh from the scene and finally calls
 * the (overridden) "populateScene" function. Add your custom code
 * as shown in landscape-rendering.
 *
 * @method cleanAndUpdateScene
 */
  @action
  async cleanAndUpdateScene() {
    await perform(this.populateScene);

    this.debug('clean and populate landscape-rendering');
  }

  // Listener-Callbacks. Override in extending components
  @action
  resetView() {
    if (this.modelIdToPlaneLayout) {
      this.camera.position.set(0, 0, 0);
      const landscapeRect = this.landscapeObject3D.getMinMaxRect(this.modelIdToPlaneLayout);

      updateCameraZoom(landscapeRect, this.camera, this.webglrenderer);
    }
  }

  @action
  onUpdated() {
    if (this.initDone) {
      perform(this.loadNewLandscape);
    }
  }

  // #endregion ACTIONS

  // #region SCENE POPULATION

  @task*
  loadNewLandscape() {
    this.landscapeObject3D.dataModel = this.args.landscapeData.structureLandscapeData;
    yield perform(this.populateScene);
  }

  /**
 * Computes new meshes for the landscape and adds them to the scene
 *
 * @method populateScene
 */
  @restartableTask*
    populateScene() {
    this.debug('populate landscape-rendering');

    const { structureLandscapeData, dynamicLandscapeData } = this.args.landscapeData;
    this.landscapeObject3D.dataModel = structureLandscapeData;

    // Run Klay layouting in 3 steps within workers
    try {
      const applicationCommunications = computeApplicationCommunication(structureLandscapeData,
        dynamicLandscapeData);

      // Do layout pre-processing (1st step)
      const { graph, modelIdToPoints }: Layout1Return = yield this.worker.postMessage('layout1', {
        structureLandscapeData,
        applicationCommunications,
      });

      // Run actual klay function (2nd step)
      const newGraph: ElkNode = yield this.elk.layout(graph);

      // Post-process layout graph (3rd step)
      const layoutedLandscape: Layout3Return = yield this.worker.postMessage('layout3', {
        graph: newGraph,
        modelIdToPoints,
        structureLandscapeData,
        applicationCommunications,
      });

      // Clean old landscape
      this.landscapeObject3D.removeAllChildren();
      this.landscapeObject3D.resetMeshReferences();

      const {
        modelIdToLayout,
        modelIdToPoints: modelIdToPointsComplete,
      }: Layout3Return = layoutedLandscape;

      const modelIdToPlaneLayout = new Map<string, PlaneLayout>();

      this.modelIdToPlaneLayout = modelIdToPlaneLayout;

      // Convert the simple to a PlaneLayout map
      LandscapeRendering.convertToPlaneLayoutMap(modelIdToLayout, modelIdToPlaneLayout);

      // Compute center of landscape
      const landscapeRect = this.landscapeObject3D.getMinMaxRect(modelIdToPlaneLayout);
      const centerPoint = landscapeRect.center;

      // Update camera zoom accordingly
      updateCameraZoom(landscapeRect, this.camera, this.webglrenderer);

      // Render all landscape entities
      const { nodes } = structureLandscapeData;

      // Draw boxes for nodes
      nodes.forEach((node) => {
        this.renderNode(node, modelIdToPlaneLayout.get(node.id), centerPoint);

        const { applications } = node;

        // Draw boxes for applications
        applications.forEach((application) => {
          this.renderApplication(application, modelIdToPlaneLayout.get(application.id),
            centerPoint);
        });
      });

      // Render application communication

      const color = this.configuration.landscapeColors.communication;

      const tiles = CommunicationRendering.computeCommunicationTiles(applicationCommunications,
        modelIdToPointsComplete, color);

      CommunicationRendering.addCommunicationLineDrawing(tiles, this.landscapeObject3D,
        centerPoint);

      this.debug('Landscape loaded');
    } catch (e) {
      console.error('RENDERING EXEPTION: ', e);
    }
  }

  /**
   * Creates & positions a node mesh with corresponding labels.
   * Then adds it to the landscapeObject3D.
   *
   * @param node Data model for the node mesh
   * @param layout Layout data to position the mesh correctly
   * @param centerPoint Offset of landscape object
   */
  renderNode(node: Node, layout: PlaneLayout | undefined,
    centerPoint: THREE.Vector2) {
    if (!layout) { return; }

    // Create node mesh
    const nodeMesh = new NodeMesh(layout, node, this.configuration.landscapeColors.node);

    // Create and add label + icon
    nodeMesh.setToDefaultPosition(centerPoint);

    // Label with own ip-address by default
    const labelText = nodeMesh.getDisplayName();

    this.labeler.addNodeTextLabel(nodeMesh, labelText, this.font,
      this.configuration.landscapeColors.nodeText);

    // Add to scene
    this.landscapeObject3D.add(nodeMesh);
  }

  /**
   * Creates & positions an application mesh with corresponding labels.
   * Then adds it to the landscapeObject3D.
   *
   * @param application Data model for the application mesh
   * @param layout Layout data to position the mesh correctly
   * @param centerPoint Offset of landscape object
   */
  renderApplication(application: Application, layout: PlaneLayout | undefined,
    centerPoint: THREE.Vector2) {
    if (!layout) { return; }

    // Create application mesh
    const applicationMesh = new ApplicationMesh(layout, application,
      this.configuration.landscapeColors.application);
    applicationMesh.setToDefaultPosition(centerPoint);

    // Create and add label + icon
    this.labeler.addApplicationTextLabel(applicationMesh, application.name, this.font,
      this.configuration.landscapeColors.applicationText);
    Labeler.addApplicationLogo(applicationMesh, this.imageLoader);

    // Add to scene
    this.landscapeObject3D.add(applicationMesh);
  }

  // #endregion SCENE POPULATION

  // #region SCENE MANIPULATION

  @action
  updateColors() {
    this.scene.traverse((object3D) => {
      if (object3D instanceof BaseMesh) {
        object3D.updateColor();
      }
    });
  }

  // #endregion SCENE MANIPULATION

  // #region MOUSE EVENT HANDLER

  @action
  handleDoubleClick(intersection: THREE.Intersection | null) {
    if (!intersection) return;
    const mesh = intersection.object;

    this.doubleClickOnMesh(mesh);
  }

  @action
  doubleClickOnMesh(mesh: THREE.Object3D) {
    // Handle application
    if (mesh instanceof ApplicationMesh) {
      this.openApplicationIfExistend(mesh);
      // Handle nodeGroup
    }
  }

  @action
  handlePanning(delta: { x: number, y: number }, button: 1 | 2 | 3) {
    const LEFT_MOUSE_BUTTON = 1;

    if (button === LEFT_MOUSE_BUTTON) {
      // Move landscape further if camera is far away
      const ZOOM_CORRECTION = (Math.abs(this.camera.position.z) / 4.0);

      // Divide delta by 100 to achieve reasonable panning speeds
      const xOffset = (delta.x / 100) * -ZOOM_CORRECTION;
      const yOffset = (delta.y / 100) * ZOOM_CORRECTION;

      // Adapt camera position (apply panning)
      this.camera.position.x += xOffset;
      this.camera.position.y += yOffset;
    }
  }

  @action
  handleMouseWheel(delta: number) {
    // Hide (old) tooltip
    this.popupData = null;

    const scrollDelta = delta * 1.5;

    const landscapeVisible = this.camera.position.z + scrollDelta > 0.2;

    // Apply zoom, prevent to zoom behind 2D-Landscape (z-direction)
    if (landscapeVisible) {
      this.camera.position.z += scrollDelta;
    }
  }

  @action
  handleMouseMove(intersection: THREE.Intersection | null) {
    if (!intersection) return;
    const mesh = intersection.object;
    this.mouseMoveOnMesh(mesh);
  }

  @action
  mouseMoveOnMesh(mesh: THREE.Object3D) {
    const enableHoverEffects = true;
    // this.currentUser.getPreferenceOrDefaultValue('flagsetting', 'enableHoverEffects') as boolean;

    // Update hover effect
    if (mesh === undefined && this.hoveredObject) {
      this.hoveredObject.resetHoverEffect();
      this.hoveredObject = null;
    } else if (mesh instanceof PlaneMesh && enableHoverEffects) {
      if (this.hoveredObject) { this.hoveredObject.resetHoverEffect(); }

      this.hoveredObject = mesh;
      mesh.applyHoverEffect();
    }

    // Do not show popups while mouse is moving
    this.popupData = null;
  }

  @action
  handleMouseOut() {
    this.popupData = null;
  }

  /*   @action
  handleMouseEnter() {
  } */

  @action
  handleMouseStop(intersection: THREE.Intersection | null, mouseOnCanvas: Position2D) {
    if (!intersection) return;
    const mesh = intersection.object;

    this.mouseStopOnMesh(mesh, mouseOnCanvas);
  }

  @action
  mouseStopOnMesh(mesh: THREE.Object3D, mouseOnCanvas: Position2D) {
    if (mesh instanceof NodeMesh || mesh instanceof ApplicationMesh) {
      this.popupData = {
        mouseX: mouseOnCanvas.x,
        mouseY: mouseOnCanvas.y,
        entity: mesh.dataModel,
      };
    }
  }

  // #endregion MOUSE EVENT HANDLER

  /**
   * Takes an application mesh and tries to enter application-rendering
   * with that application. Displays an errors message if application does
   * not contain any data.
   *
   * @param applicationMesh Mesh of application which shall be opened
   */
  @action
  openApplicationIfExistend(applicationMesh: ApplicationMesh) {
    const application = applicationMesh.dataModel;
    // No data => show message
    if (application.packages.length === 0) {
      const message = `Sorry, there is no information for application <b>
        ${application.name}</b> available.`;

      AlertifyHandler.showAlertifyMessage(message);
    } else {
      // data available => open application-rendering
      AlertifyHandler.closeAlertifyMessages();
      this.args.showApplication(application);
    }
  }

  /**
   * Takes a map with plain JSON layout objects and creates PlaneLayout objects from it
   *
   * @param layoutedApplication Map containing plain JSON layout data
   */
  static convertToPlaneLayoutMap(modelIdToSimpleLayout: Map<string, SimplePlaneLayout>,
    modelIdToPlaneLayout: Map<string, PlaneLayout>) {
    // Construct a layout map from plain JSON layouts
    modelIdToSimpleLayout.forEach((simplePlaneLayout: SimplePlaneLayout, modelId: string) => {
      const planeLayoutObject = new PlaneLayout();
      planeLayoutObject.height = simplePlaneLayout.height;
      planeLayoutObject.width = simplePlaneLayout.width;
      planeLayoutObject.positionX = simplePlaneLayout.positionX;
      planeLayoutObject.positionY = simplePlaneLayout.positionY;

      modelIdToPlaneLayout.set(modelId, planeLayoutObject);
    });
  }
}
