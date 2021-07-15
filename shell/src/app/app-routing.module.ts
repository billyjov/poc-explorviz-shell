import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AuthGuard } from './core/guards/auth.guard';
import { ShellOutletComponent } from './shell-outlet/shell-outlet/shell-outlet.component';
import { VisualizationComponent } from './visualization/visualization.component';

const routes: Routes = [
  {
    path: 'list',
    component: ShellOutletComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./list/list.module').then((m) => m.ListModule),
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
        loadChildren: () =>
          import('./landscapes/landscapes.module').then(
            (m) => m.LandscapesModule
          ),
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
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'landscapes'
  },
  {
    path: 'visualization',
    component: ShellOutletComponent,
    children: [
      {
        path: '',
        component: VisualizationComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'corrected' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
