import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AngularMaterialModule } from '@app/shared/angular-material.module';
import { LayoutModule } from '@angular/cdk/layout';

export const modules = [
  CommonModule,
  RouterModule,
  ReactiveFormsModule,
  FormsModule,
  AngularMaterialModule,
  LayoutModule
];
