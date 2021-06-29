import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LazyElementsModule } from '@angular-extensions/elements';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { LandscapesComponent } from './landscapes/landscapes.component';
import { LoginComponent } from './login/login.component';
// import { AuthConfig, AuthModule } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';

// const config: AuthConfig =  {
//   domain: environment.auth0.domain,
//   clientId: environment.auth0.clientId,
//   redirectUri: environment.auth0.routeAfterLogin,
// }

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    LandscapesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    LazyElementsModule,
    AppRoutingModule,
    // AuthModule.forRoot(
    //   config
    // )
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
