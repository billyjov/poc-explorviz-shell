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
    this.traceSteps = getSortedTraceSpans(this.selectedTrace as Trace);

    if (this.traceSteps.length > 0) {
      const [firstStep] = this.traceSteps;
      this.currentTraceStep = firstStep;

      this.highlightTrace(this.selectedTrace, firstStep.spanId);

      if (this.isReplayAnimated) {
        this.moveCameraTo(this.currentTraceStep);
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

  selectNextTraceStep(): void {
    // Can only select next step if a trace is selected
    if (!this.currentTraceStep) {
      return;
    }

    const currentTracePosition = this.traceSteps.findIndex(
      (span) => span === this.currentTraceStep
    );

    if (currentTracePosition === -1) {
      return;
    }

    const nextStepPosition = currentTracePosition + 1;

    if (nextStepPosition > this.traceSteps.length - 1) {
      return;
    }

    this.currentTraceStep = this.traceSteps[nextStepPosition];

    this.highlightTrace(this.selectedTrace, this.currentTraceStep.spanId);

    if (this.isReplayAnimated) {
      this.moveCameraTo(this.currentTraceStep);
    }
  }

  selectPreviousTraceStep(): void {
    // Can only select next step if a trace is selected
    if (!this.currentTraceStep) {
      return;
    }

    const currentTracePosition = this.traceSteps.findIndex(
      (span) => span === this.currentTraceStep
    );

    if (currentTracePosition === -1) {
      return;
    }

    const previousStepPosition = currentTracePosition - 1;

    if (previousStepPosition < 0) {
      return;
    }

    this.currentTraceStep = this.traceSteps[previousStepPosition];

    this.highlightTrace(this.selectedTrace, this.currentTraceStep.spanId);

    if (this.isReplayAnimated) {
      this.moveCameraTo(this.currentTraceStep);
    }
  }

  private moveCameraTo(step: Span | null): void {
    window.dispatchEvent(
      new CustomEvent('trace:move-camera-to', {
        detail: {
          step,
        },
      })
    );
  }

  private highlightTrace(trace: Trace | null, traceStep: string): void {
    window.dispatchEvent(
      new CustomEvent('trace:highlight-trace', {
        detail: {
          trace,
          traceStep,
        },
      })
    );
  }
}
