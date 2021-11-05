import { Component, Input, OnInit } from '@angular/core';
import { Span, Trace } from '../shared/utils/landscape-schemes/dynamic-data';
import { StructureLandscapeData } from '../shared/utils/landscape-schemes/structure-data';
import {
  getApplicationFromClass,
  getHashCodeToClassMap,
  spanIdToClass,
} from '../shared/utils/landscape-structure-helpers';
import { getSortedTraceSpans } from '../shared/utils/trace-helpers';

@Component({
  selector: 'app-trace-replayer-main',
  templateUrl: './trace-replayer-main.component.html',
  styleUrls: ['./trace-replayer-main.component.scss'],
})
export class TraceReplayerMainComponent implements OnInit {
  @Input() selectedTrace: Trace | null;
  @Input() structureData: StructureLandscapeData;
  currentTraceStep: Span | null = null;
  traceSteps: Span[] = [];
  isReplayAnimated: boolean = true;

  ngOnInit(): void {
    console.log('selectedTrace: ', this.selectedTrace);
    this.traceSteps = getSortedTraceSpans(this.selectedTrace as Trace);

    if (this.traceSteps.length > 0) {
      const [firstStep] = this.traceSteps;
      this.currentTraceStep = firstStep;

      //  this.args.highlightTrace(this.args.selectedTrace, firstStep.spanId);

      if (this.isReplayAnimated) {
        // this.args.moveCameraTo(this.currentTraceStep);
      }
    }
  }

  get currentTraceStepIndex() {
    return this.traceSteps.findIndex((span) => span === this.currentTraceStep);
  }

  get sourceClass() {
    const currentTraceStep = this.currentTraceStep;
    const selectedTrace = this.selectedTrace;
    if (selectedTrace && currentTraceStep) {
      return spanIdToClass(
        this.structureData,
        selectedTrace,
        currentTraceStep.parentSpanId
      );
    }
    return undefined;
  }

  get sourceApplication() {
    return this.sourceClass
      ? getApplicationFromClass(this.structureData, this.sourceClass)
      : undefined;
  }

  get targetClass() {
    const currentTraceStep = this.currentTraceStep;
    const selectedTrace = this.selectedTrace;
    if (selectedTrace && currentTraceStep) {
      return spanIdToClass(
        this.structureData,
        selectedTrace,
        currentTraceStep.spanId
      );
    }
    return undefined;
  }

  get targetApplication() {
    return this.targetClass
      ? getApplicationFromClass(this.structureData, this.targetClass)
      : undefined;
  }

  get operationName() {
    const hashCodeToClassMap = getHashCodeToClassMap(this.structureData);

    if (this.currentTraceStep) {
      const clazz = hashCodeToClassMap.get(this.currentTraceStep.hashCode);

      return clazz?.methods.find(
        (method) => method.hashCode === this.currentTraceStep?.hashCode
      )?.name;
    }
    return undefined;
  }
}
