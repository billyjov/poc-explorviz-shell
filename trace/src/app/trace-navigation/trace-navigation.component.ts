import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-trace-navigation',
  templateUrl: './trace-navigation.component.html',
  styleUrls: ['./trace-navigation.component.scss'],
})
export class TraceNavigationComponent {
  @Input() currentTraceStepIndex: number;
  @Input() traceStepCount: number;
  @Output() selectNextTraceStep: EventEmitter<void> = new EventEmitter<void>();
  @Output() selectPreviousTraceStep: EventEmitter<void> =
    new EventEmitter<void>();
}
