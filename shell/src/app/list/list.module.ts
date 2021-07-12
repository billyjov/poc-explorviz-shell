import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LazyElementsModule } from '@angular-extensions/elements';

import { ListComponent } from './list.component';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    LazyElementsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListComponent,
      },
    ]),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ListModule {}
