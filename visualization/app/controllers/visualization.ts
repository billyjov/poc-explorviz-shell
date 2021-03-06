import Controller from '@ember/controller';
import { action, set } from '@ember/object';
import { inject as service } from '@ember/service';
import debugLogger from 'ember-debug-logger';

import { tracked } from '@glimmer/tracking';

import PlotlyTimeline from 'visualization/components/visualization/page-setup/timeline/plotly-timeline';
import LandscapeListener from 'visualization/services/landscape-listener';
import CollaborativeService from 'collaborative-mode/services/collaborative-service';
import ReloadHandler from 'visualization/services/reload-handler';
import TimestampRepository, {
  Timestamp,
} from 'visualization/services/repos/timestamp-repository';
import {
  Application,
  StructureLandscapeData,
} from 'visualization/utils/landscape-schemes/structure-data';
import { DynamicLandscapeData } from 'visualization/utils/landscape-schemes/dynamic-data';
import AlertifyHandler from 'visualization/utils/alertify-handler';
import { CollaborativeEvents } from 'collaborative-mode/utils/collaborative-data';
import LandscapeTokenService from 'visualization/services/landscape-token';
import { getHashCodeToClassMap } from 'visualization/utils/landscape-structure-helpers';

export interface LandscapeData {
  structureLandscapeData: StructureLandscapeData;
  dynamicLandscapeData: DynamicLandscapeData;
  application?: Application;
}

/**
 * TODO
 *
 * @class Visualization-Controller
 * @extends Ember.Controller
 *
 * @module explorviz
 * @submodule visualization
 */
export default class VisualizationController extends Controller {
  @service('landscape-listener') landscapeListener!: LandscapeListener;

  @service('collaborative-service') collaborativeService!: CollaborativeService;

  @service('repos/timestamp-repository') timestampRepo!: TimestampRepository;

  @service('landscape-token') landscapeTokenService!: LandscapeTokenService;

  @service('reload-handler') reloadHandler!: ReloadHandler;

  plotlyTimelineRef!: PlotlyTimeline;

  selectedTimestampRecords: Timestamp[] = [];

  @tracked
  font!: THREE.Font; // set by the route

  @tracked
  showDataSelection = false;

  @tracked
  components: string[] = [];

  @tracked
  showVR: boolean = false;

  @tracked
  showTimeline: boolean = true;

  @tracked
  landscapeData: LandscapeData | null = null;

  @tracked
  visualizationPaused = false;

  @tracked
  timelineTimestamps: Timestamp[] = [];

  debug = debugLogger();

  get showLandscapeView() {
    return (
      (this.landscapeData !== null &&
        this.landscapeData.application === undefined &&
        !this.showVR) ||
      this.landscapeData === null
    );
  }

  get isLandscapeExistendAndEmpty() {
    return (
      this.landscapeData !== null &&
      this.landscapeData.structureLandscapeData.nodes.length === 0
    );
  }

  get allLandscapeDataExistsAndNotEmpty() {
    return (
      this.landscapeData !== null &&
      this.landscapeData.structureLandscapeData.nodes.length > 0
    );
  }

  get showApplicationView() {
    return (
      this.landscapeData !== null &&
      this.landscapeData.application !== undefined
    );
  }

  @action
  updateTimestampList() {
    const currentToken = this.landscapeTokenService.token!.value;
    this.timelineTimestamps =
      this.timestampRepo.getTimestamps(currentToken) ?? [];
  }

  @action
  receiveNewLandscapeData(
    structureData: StructureLandscapeData,
    dynamicData: DynamicLandscapeData
  ) {
    if (!this.visualizationPaused) {
      this.updateLandscape(structureData, dynamicData);
    }
  }

  updateLandscape(
    structureData: StructureLandscapeData,
    dynamicData: DynamicLandscapeData
  ) {
    let application;
    if (this.landscapeData !== null) {
      application = this.landscapeData.application;
      if (application !== undefined) {
        const newApplication =
          VisualizationController.getApplicationFromLandscapeById(
            application.id,
            structureData
          );

        if (newApplication) {
          application = newApplication;
        }
      }
    }
    this.landscapeData = {
      structureLandscapeData: structureData,
      dynamicLandscapeData: dynamicData,
      application,
    };
  }

  private static getApplicationFromLandscapeById(
    id: string,
    structureData: StructureLandscapeData
  ) {
    let foundApplication: Application | undefined;
    structureData.nodes.forEach((node) => {
      node.applications.forEach((application) => {
        if (application.id === id) {
          foundApplication = application;
        }
      });
    });

    return foundApplication;
  }

  @action
  openLandscapeView() {
    this.receiveOpenLandscapeView();
    this.collaborativeService.send(CollaborativeEvents.OpenLandscapeView, {});
  }

  @action
  receiveOpenLandscapeView() {
    this.closeDataSelection();
    this.showVR = false;
    if (this.landscapeData !== null) {
      this.landscapeData = {
        ...this.landscapeData,
        application: undefined,
      };
    }
  }

  @action
  showApplication(app: Application) {
    this.closeDataSelection();
    if (this.landscapeData !== null) {
      this.landscapeData = {
        ...this.landscapeData,
        application: app,
      };
      this.collaborativeService.send(CollaborativeEvents.ApplicationOpened, {
        id: app.id,
      });
    }
  }

  @action
  switchToVR() {
    if (!this.showVR) {
      this.pauseVisualizationUpdating();
      this.closeDataSelection();
      this.showVR = true;
    }
  }

  @action
  resetView() {
    this.plotlyTimelineRef.continueTimeline(this.selectedTimestampRecords);
  }

  @action
  resetLandscapeListenerPolling() {
    if (this.landscapeListener.timer !== null) {
      clearTimeout(this.landscapeListener.timer);
    }
  }

  @action
  closeDataSelection() {
    this.showDataSelection = false;
    this.components = [];
  }

  @action
  openDataSelection() {
    if (!!this.landscapeData?.application) {
      window.dispatchEvent(
        new CustomEvent('visualization:open-sidebar', {
          detail: {
            landscapeData: this.landscapeData,
            applicationTraces: this.applicationTraces,
          },
        })
      );
    } else {
      window.dispatchEvent(new CustomEvent('visualization:open-sidebar'));
    }
  }

  get applicationTraces() {
    const hashCodeToClassMap = getHashCodeToClassMap(
      this.landscapeData?.application as StructureLandscapeData | Application
    );

    return this.landscapeData?.dynamicLandscapeData.filter((trace) =>
      trace.spanList.any(
        (span) => hashCodeToClassMap.get(span.hashCode) !== undefined
      )
    );
  }

  @action
  addComponent(component: string) {
    if (this.components.includes(component)) {
      // remove it and readd it in the code below,
      // so it again appears on top inside the sidebar
      // This will not reset the component
      this.removeComponent(component);
    }

    this.components = [component, ...this.components];
  }

  @action
  removeComponent(path: string) {
    if (this.components.length === 0) {
      return;
    }

    const index = this.components.indexOf(path);
    // Remove existing sidebar component
    if (index !== -1) {
      const components = [...this.components];
      components.splice(index, 1);
      this.components = components;
    }
  }

  @action
  async timelineClicked(timestampRecordArray: Timestamp[]) {
    if (
      this.selectedTimestampRecords.length > 0 &&
      timestampRecordArray[0] === this.selectedTimestampRecords[0]
    ) {
      return;
    }
    this.pauseVisualizationUpdating();
    try {
      const [structureData, dynamicData] =
        await this.reloadHandler.loadLandscapeByTimestamp(
          timestampRecordArray[0].timestamp
        );

      this.updateLandscape(structureData, dynamicData);
      set(this, 'selectedTimestampRecords', timestampRecordArray);
    } catch (e) {
      this.debug("Landscape couldn't be requested!", e);
      AlertifyHandler.showAlertifyMessage("Landscape couldn't be requested!");
      this.resumeVisualizationUpdating();
    }
  }

  @action
  getTimelineReference(plotlyTimelineRef: PlotlyTimeline) {
    // called from within the plotly timeline component
    set(this, 'plotlyTimelineRef', plotlyTimelineRef);
  }

  @action
  toggleTimeline() {
    this.showTimeline = !this.showTimeline;
  }

  @action
  toggleVisualizationUpdating() {
    // TODO: need to notify the timeline
    if (this.visualizationPaused) {
      this.resumeVisualizationUpdating();
    } else {
      this.pauseVisualizationUpdating();
    }
  }

  resumeVisualizationUpdating() {
    if (this.visualizationPaused) {
      this.visualizationPaused = false;
      set(this, 'selectedTimestampRecords', []);
      this.plotlyTimelineRef.resetHighlighting();
      AlertifyHandler.showAlertifyMessage('Visualization resumed!');
    }
  }

  pauseVisualizationUpdating() {
    if (!this.visualizationPaused) {
      this.visualizationPaused = true;
      AlertifyHandler.showAlertifyMessage('Visualization paused!');
    }
  }

  initRendering() {
    this.landscapeData = null;
    this.selectedTimestampRecords = [];
    this.visualizationPaused = false;
    this.closeDataSelection();
    this.landscapeListener.initLandscapePolling();
    this.updateTimestampList();
  }

  willDestroy() {
    this.resetLandscapeListenerPolling();
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  // tslint:disable-next-line: interface-name
  interface Registry {
    visualizationController: VisualizationController;
  }
}
