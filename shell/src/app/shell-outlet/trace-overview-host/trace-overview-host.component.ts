import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  ViewContainerRef,
  ComponentRef,
  OnDestroy,
} from '@angular/core';

import { loadRemoteModule } from '@angular-architects/module-federation';
import { EventBridgeService } from 'src/app/core/event-bridge/event-bridge.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-trace-overview-host',
  templateUrl: './trace-overview-host.component.html',
  styleUrls: ['./trace-overview-host.component.scss'],
})
export class TraceOverviewHostComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription = new Subscription();

  constructor(
    private cfr: ComponentFactoryResolver,
    private vCref: ViewContainerRef,
    private evtBridgeService: EventBridgeService
  ) {}

  async ngOnInit(): Promise<void> {
    const { AppComponent } = await loadRemoteModule({
      remoteEntry: 'http://localhost:4500/remoteEntry.js',
      remoteName: 'trace',
      exposedModule: './Component',
    });
    const componentRef: ComponentRef<{ trace: string }> =
      this.vCref.createComponent(
        this.cfr.resolveComponentFactory(AppComponent)
      );
    componentRef.instance.trace = '';
    this.subscriptions.add(
      this.evtBridgeService.landscapeDataSubject.subscribe((val) => {
        (componentRef.instance as any).landscapeData = val.landscapeData;
        (componentRef.instance as any).isShellPresent = true;
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
