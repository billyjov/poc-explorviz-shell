import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-trace-navigation',
  templateUrl: './trace-navigation.component.html',
  styleUrls: ['./trace-navigation.component.scss'],
})
export class TraceNavigationComponent implements OnInit {
  @Input() currentTraceStepIndex: number;
  @Input() traceStepCount: number;

  constructor() {}

  ngOnInit(): void {}
}
