import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ShellOutletComponent } from './shell-outlet/shell-outlet.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    ShellOutletComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbCollapseModule
  ]
})
export class ShellOutletModule { }
