import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LazyElementsModule } from '@angular-extensions/elements';

import { LandscapesComponent } from './landscapes.component';


@NgModule({
  declarations: [LandscapesComponent],
  imports: [
    CommonModule,
    LazyElementsModule,
    RouterModule.forChild([
      {
        path: '',
        component: LandscapesComponent
      }
    ])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LandscapesModule { }
