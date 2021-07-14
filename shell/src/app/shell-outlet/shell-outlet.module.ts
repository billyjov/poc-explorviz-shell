import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ShellOutletComponent } from './shell-outlet/shell-outlet.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ShellOutletComponent],
  imports: [CommonModule, RouterModule, NgbModule],
})
export class ShellOutletModule {}
