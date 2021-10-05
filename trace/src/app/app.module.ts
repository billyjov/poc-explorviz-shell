import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent, NgbdSortableHeader } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NbgdSortableHeaderDirective } from './shared/directives/nbgd-sortable-header.directive';

@NgModule({
  declarations: [AppComponent, NbgdSortableHeaderDirective, NgbdSortableHeader],
  imports: [BrowserModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
