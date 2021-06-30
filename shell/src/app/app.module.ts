import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LazyElementsModule } from '@angular-extensions/elements';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { LandscapesComponent } from './landscapes/landscapes.component';
import { LoginComponent } from './login/login.component';
import { ShellOutletModule } from './shell-outlet/shell-outlet.module';
import { CallbackComponent } from './callback/callback.component';
import { VisualizationComponent } from './visualization/visualization.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    LandscapesComponent,
    LoginComponent,
    CallbackComponent,
    VisualizationComponent
  ],
  imports: [
    BrowserModule,
    LazyElementsModule,
    ShellOutletModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
