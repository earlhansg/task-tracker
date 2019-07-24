import { NgModule } from '@angular/core';

import { materials } from './dependencies/shared-materials';


@NgModule({
  imports: [...materials],
  exports: [...materials]
})
export class AngularMaterialModule {}
