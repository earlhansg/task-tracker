import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { modules } from './dependencies/shared-module';

@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SharedModule { }
