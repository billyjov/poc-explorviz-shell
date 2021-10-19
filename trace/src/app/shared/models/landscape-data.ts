export interface LandscapeData {
  structureLandscapeData: StructureLandscapeData;
  dynamicLandscapeData: DynamicLandscapeData;
  application?: Application;
}


export interface Node {
  id: string;
  ipAddress: string;
  hostName: string;
  applications: Application[];
}

export interface StructureLandscapeData {
  landscapeToken: string;
  nodes: Node[];
}


export interface Application {
  id: string;
  name: string;
  language: string;
  instanceId: string;
  parent: Node;
  packages: Package[];
}

export interface Package {
  id: string;
  name: string;
  subPackages: Package[];
  classes: Class[];
  parent?: Package;
}

export interface Class {
  id: string;
  name: string;
  methods: Method[];
  parent: Package;
}

export interface Method {
  name: string;
  hashCode: string;
}

export type DynamicLandscapeData = Trace[];

export interface Trace {
  landscapeToken: string;
  traceId: string;
  startTime: number;
  endTime: number;
  duration: number;
  overallRequestCount: 1;
  traceCount: number;
  spanList: Span[];
}

export interface Span {
  landscapeToken: string;
  spanId: string;
  parentSpanId: string;
  traceId: string;
  startTime: number;
  endTime: number;
  hashCode: string;
}
