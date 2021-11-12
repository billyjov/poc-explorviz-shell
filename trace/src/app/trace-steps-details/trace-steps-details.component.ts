import { Component, Input } from '@angular/core';

import { Span } from '../shared/utils/landscape-schemes/dynamic-data';
import { Class } from '../shared/utils/landscape-schemes/structure-data';

@Component({
  selector: 'app-trace-steps-details',
  templateUrl: './trace-steps-details.component.html',
  styleUrls: ['./trace-steps-details.component.scss'],
})
export class TraceStepsDetailsComponent {
  @Input() operationName: string | undefined;
  @Input() sourceClass: Class | undefined;
  @Input() targetClass: Class | undefined;
  @Input() sourceApplicationName: string | undefined;
  @Input() targetApplicationName: string | undefined;
  @Input() spanStartTime: number | undefined;
  @Input() spanEndTime: number | undefined;

  public moveCameraTo(step: Class | undefined): void {
    window.dispatchEvent(
      new CustomEvent('trace:move-camera-to', {
        detail: {
          step,
        },
      })
    );
  }
}
