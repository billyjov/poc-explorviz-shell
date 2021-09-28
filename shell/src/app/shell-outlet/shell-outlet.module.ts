import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ShellOutletComponent } from './shell-outlet/shell-outlet.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from '../sidebar/sidebar.component';

@NgModule({
  declarations: [ShellOutletComponent, SidebarComponent],
  imports: [CommonModule, RouterModule, NgbModule],
})
export class ShellOutletModule {}
