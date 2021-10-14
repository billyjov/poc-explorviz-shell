import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  ViewContainerRef,
  ComponentRef,
} from '@angular/core';

import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
  selector: 'app-trace-overview-host',
  templateUrl: './trace-overview-host.component.html',
  styleUrls: ['./trace-overview-host.component.scss'],
})
export class TraceOverviewHostComponent implements OnInit {
  constructor(
    private cfr: ComponentFactoryResolver,
    private vCref: ViewContainerRef
  ) {}

  async ngOnInit(): Promise<void> {
    const { AppComponent } = await loadRemoteModule({
      remoteEntry: 'http://localhost:4500/remoteEntry.js',
      remoteName: 'trace',
      exposedModule: './Component'
    });
    const componentRef: ComponentRef<{ trace: string }> = this.vCref.createComponent(
      this.cfr.resolveComponentFactory(AppComponent)
    );
    componentRef.instance.trace = '';
  }
}
