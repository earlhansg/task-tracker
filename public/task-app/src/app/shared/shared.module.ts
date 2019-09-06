import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { modules } from '@app/shared/dependencies/shared-module';
import { components } from '@app/shared/dependencies/shared-components';

import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
@NgModule({
  declarations: [...components],
  imports: [...modules, FormlyModule.forRoot(), FormlyMaterialModule],
  exports: [...modules, ...components],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  entryComponents: [
    ...components
  ]
})
export class SharedModule { }

