import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent, NgbdSortableHeader } from './app.component';
import { NbgdSortableHeaderDirective } from './shared/directives/nbgd-sortable-header.directive';
import { TraceReplayerMainComponent } from './trace-replayer-main/trace-replayer-main.component';
import { TraceNavigationComponent } from './trace-navigation/trace-navigation.component';
import { TraceStepsDetailsComponent } from './trace-steps-details/trace-steps-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NbgdSortableHeaderDirective,
    NgbdSortableHeader,
    TraceReplayerMainComponent,
    TraceNavigationComponent,
    TraceStepsDetailsComponent,
  ],
  imports: [BrowserModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
