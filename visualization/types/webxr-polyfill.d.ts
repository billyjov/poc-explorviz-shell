declare module 'webxr-polyfill';

type XRSessionMode =
    | 'inline'
    | 'immersive-vr'
    | 'immersive-ar';

type XRReferenceSpaceType =
    | 'viewer'
    | 'local'
    | 'local-floor'
    | 'bounded-floor'
    | 'unbounded';

type XREnvironmentBlendMode =
    | 'opaque'
    | 'additive'
    | 'alpha-blend';

type XRVisibilityState =
    | 'visible'
    | 'visible-blurred'
    | 'hidden';

type XRHandedness =
    | 'none'
    | 'left'
    | 'right';

type XRTargetRayMode =
    | 'gaze'
    | 'tracked-pointer'
    | 'screen';

type XREye =
    | 'none'
    | 'left'
    | 'right';

type XREventType =
    | 'devicechange'
    | 'visibilitychange'
    | 'end'
    | 'inputsourceschange'
    | 'select'
    | 'selectstart'
    | 'selectend'
    | 'squeeze'
    | 'squeezestart'
    | 'squeezeend'
    | 'reset';

interface XRSpace extends EventTarget {

}

interface XRRenderState {
  depthNear?: number;
  depthFar?: number;
  inlineVerticalFieldOfView?: number;
  baseLayer?: XRWebGLLayer;
}

interface XRInputSource {
  handedness: XRHandedness;
  targetRayMode: XRTargetRayMode;
  targetRaySpace: XRSpace;
  gripSpace: XRSpace | undefined;
  gamepad: Gamepad | undefined;
  profiles: Array<string>;
}

interface XRSessionInit {
  optionalFeatures?: string[];
  requiredFeatures?: string[];
}

interface XRSession {
  addEventListener: Function;
  removeEventListener: Function;
  requestReferenceSpace(type: XRReferenceSpaceType): Promise<XRReferenceSpace>;
  updateRenderState(XRRenderStateInit: XRRenderState): Promise<void>;
  requestAnimationFrame: Function;
  end(): Promise<void>;
  renderState: XRRenderState;
  inputSources: Array<XRInputSource>;

  // hit test
  requestHitTestSource(options: XRHitTestOptionsInit): Promise<XRHitTestSource>;
  requestHitTestSourceForTransientInput(options: XRTransientInputHitTestOptionsInit):
  Promise<XRTransientInputHitTestSource>;

  // legacy AR hit test
  requestHitTest(ray: XRRay, referenceSpace: XRReferenceSpace): Promise<XRHitResult[]>;

  // legacy plane detection
  updateWorldTrackingState(options: {
    planeDetectionState?: { enabled: boolean; }
  }): void;
}

interface XRReferenceSpace extends XRSpace {
  // getOffsetReferenceSpace(originOffset: XRRigidTransform): XRReferenceSpace;
  getOffsetReferenceSpace(originOffset: any): XRReferenceSpace;
  onreset: any;
}

type XRPlaneSet = Set<XRPlane>;
type XRAnchorSet = Set<XRAnchor>;

interface XRFrame {
  session: XRSession;
  getViewerPose(referenceSpace: XRReferenceSpace): XRViewerPose | undefined;
  getPose(space: XRSpace, baseSpace: XRSpace): XRPose | undefined;

  // AR
  getHitTestResults(hitTestSource: XRHitTestSource): Array<XRHitTestResult> ;
  getHitTestResultsForTransientInput(hitTestSource: XRTransientInputHitTestSource):
  Array<XRTransientInputHitTestResult>;
  // Anchors
  trackedAnchors?: XRAnchorSet;
  // createAnchor(pose: XRRigidTransform, space: XRSpace): Promise<XRAnchor>;
  createAnchor(pose: any, space: XRSpace): Promise<XRAnchor>;
  // Planes
  worldInformation: {
    detectedPlanes?: XRPlaneSet;
  };
}

interface XRViewerPose extends XRPose {
  views: Array<XRView>;
}

interface XRPose {
  // transform: XRRigidTransform;
  transform: any;
  emulatedPosition: boolean;
}

interface XRWebGLLayerOptions {
  antialias?: boolean;
  depth?: boolean;
  stencil?: boolean;
  alpha?: boolean;
  multiview?: boolean;
  framebufferScaleFactor?: number;
}

declare class XRWebGLLayer {
  static getNativeFramebufferScaleFactor(session: XRSession): number;
  constructor(session: XRSession, context: WebGLRenderingContext | WebGL2RenderingContext,
    // layerInit?: XRWebGLLayerInit);
    layerInit?: any);
  readonly antialias: boolean;

  readonly framebuffer: WebGLFramebuffer;

  readonly framebufferWidth: number;

  readonly framebufferHeight: number;

  readonly ignoreDepthValues: boolean;

  // getViewport: (view: XRView) => XRViewport;
  getViewport: (view: XRView) => any;
}

interface XRView {
  eye: XREye;
  projectionMatrix: Float32Array;
  // transform: XRRigidTransform;
  transform: any;
}

interface XRInputSourceChangeEvent {
  session: XRSession;
  removed: Array<XRInputSource>;
  added: Array<XRInputSource>;
}

interface XRInputSourceEvent extends Event {
  readonly frame: XRFrame;
  readonly inputSource: XRInputSource;
}

// Experimental(er) features
declare class XRRay {
  // constructor(transformOrOrigin: XRRigidTransform | DOMPointInit, direction?: DOMPointInit);
  constructor(transformOrOrigin: any | DOMPointInit, direction?: DOMPointInit);

  origin: DOMPointReadOnly;

  direction: DOMPointReadOnly;

  matrix: Float32Array;
}

declare enum XRHitTestTrackableType {
  'point',
  'plane',
  'mesh',
}

interface XRHitResult {
  hitMatrix: Float32Array;
}

interface XRTransientInputHitTestResult {
  readonly inputSource: XRInputSource;
  readonly results: Array<XRHitTestResult>;
}

interface XRHitTestResult {
  getPose(baseSpace: XRSpace): XRPose | undefined;
  // When anchor system is enabled
  // createAnchor?(pose: XRRigidTransform): Promise<XRAnchor>;
  createAnchor?(pose: any): Promise<XRAnchor>;
}

interface XRHitTestSource {
  cancel(): void;
}

interface XRTransientInputHitTestSource {
  cancel(): void;
}

interface XRHitTestOptionsInit {
  space: XRSpace;
  entityTypes?: Array<XRHitTestTrackableType>;
  offsetRay?: XRRay;
}

interface XRTransientInputHitTestOptionsInit {
  profile: string;
  entityTypes?: Array<XRHitTestTrackableType>;
  offsetRay?: XRRay;
}

interface XRAnchor {
  anchorSpace: XRSpace;
  delete(): void;
}

interface XRPlane {
  orientation: 'Horizontal' | 'Vertical';
  planeSpace: XRSpace;
  polygon: Array<DOMPointReadOnly>;
  lastChangedTime: number;
}
