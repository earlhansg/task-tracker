import { NgModule } from '@angular/core';

import { materials } from '@app/shared/dependencies/shared-materials';


@NgModule({
  imports: [...materials],
  exports: [...materials]
})
export class AngularMaterialModule { }
