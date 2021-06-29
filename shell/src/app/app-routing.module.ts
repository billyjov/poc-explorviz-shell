import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandscapesComponent } from './landscapes/landscapes.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListComponent
  }, {
    path: 'landscapes',
    component: LandscapesComponent
  }, {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
