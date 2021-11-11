import { Component } from '@angular/core';
import { EventBridgeService } from 'src/app/core/event-bridge/event-bridge.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  public showTraceOverview = false;
  public showColorPicker = false;
  public showCollaborativeMode = false;

  constructor(private eventService: EventBridgeService) {}

  public hasTraceOverview(): boolean {
    const trace = this.eventService.landscapeDataSubject.value;

    return !!trace && Object.keys(trace).length !== 0;
  }
}
