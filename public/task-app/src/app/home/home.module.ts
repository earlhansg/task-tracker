import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers, effects } from '@app/dashboard/store';

/* Guards */
import * as fromGuards from '@app/dashboard/store/guards';

// Component
import { HomeComponent } from '@app/home/containers/home/home.component';
import { LoginSignupComponent } from '@app/home/components/login-signup/login-signup.component';

// Modules
import { HomeRouting } from '@app/home/home-routing.module';
import { SharedModule } from '@app/shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    // Custom Modules
    HomeRouting,
    SharedModule,
    FlexLayoutModule,
    StoreModule.forFeature('task', reducers),
    EffectsModule.forFeature(effects),
  ],
  declarations: [
    HomeComponent,
    LoginSignupComponent
  ],
  providers: [...fromGuards.guards]
})
export class HomeModule { }
