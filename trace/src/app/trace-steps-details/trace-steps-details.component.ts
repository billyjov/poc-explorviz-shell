import { Component, Input, OnInit } from '@angular/core';
import { Class } from '../shared/utils/landscape-schemes/structure-data';

@Component({
  selector: 'app-trace-steps-details',
  templateUrl: './trace-steps-details.component.html',
  styleUrls: ['./trace-steps-details.component.scss'],
})
export class TraceStepsDetailsComponent implements OnInit {
  @Input() operationName: string | undefined;
  @Input() sourceClass: Class | undefined;
  @Input() targetClass: Class | undefined;
  @Input() sourceApplicationName: string | undefined;
  @Input() targetApplicationName: string | undefined;
  @Input() spanStartTime: number | undefined;
  @Input() spanEndTime: number | undefined;

  constructor() {}

  ngOnInit(): void {}
}
