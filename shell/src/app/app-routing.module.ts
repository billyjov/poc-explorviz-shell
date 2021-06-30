import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandscapesComponent } from './landscapes/landscapes.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { ShellOutletComponent } from './shell-outlet/shell-outlet/shell-outlet.component';

const routes: Routes = [
  {
    path: 'list',
    component: ShellOutletComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: ListComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
  {
    path: 'landscapes',
    component: ShellOutletComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: LandscapesComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'callback',
    pathMatch: 'full',
    redirectTo: 'landscapes',
    // component: CallbackComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'landscapes',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
