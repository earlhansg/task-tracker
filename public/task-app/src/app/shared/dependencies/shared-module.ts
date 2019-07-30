import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// import { FormlyModule } from '@ngx-formly/core';
// import { FormlyMaterialModule } from '@ngx-formly/material';

import { AngularMaterialModule } from '@app/shared/angular-material.module';

export const modules = [
  CommonModule,
  RouterModule,
  ReactiveFormsModule,
  FormsModule,
  AngularMaterialModule
];
