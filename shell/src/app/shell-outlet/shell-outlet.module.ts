import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LazyElementsModule } from '@angular-extensions/elements';

import { ShellOutletComponent } from './shell-outlet/shell-outlet.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SettingsComponent } from '../settings/settings.component';
import { TraceOverviewHostComponent } from './trace-overview-host/trace-overview-host.component';

@NgModule({
  declarations: [ShellOutletComponent, SidebarComponent, SettingsComponent, TraceOverviewHostComponent],
  imports: [CommonModule, RouterModule, NgbModule, LazyElementsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ShellOutletModule {}
