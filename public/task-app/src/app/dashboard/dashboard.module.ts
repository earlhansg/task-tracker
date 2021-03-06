import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers, effects } from './store';

/* Components */
import * as fromComponents from '@app/dashboard/components';

/* Containers */
import * as fromContainers from '@app/dashboard/containers';

/* Modules */
import { DashboardRouting } from '@app/dashboard/dashboard-routing.module';
import { SharedModule } from '@app/shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';

/* Guards */
import * as fromGuards from '@app/dashboard/store/guards';

@NgModule({
  imports: [
    CommonModule,
    // Custom Modules
    DashboardRouting,
    SharedModule,
    FlexLayoutModule,
    StoreModule.forFeature('task', reducers),
    EffectsModule.forFeature(effects),
  ],
  declarations: [...fromContainers.containers, ...fromComponents.components],
  exports: [...fromContainers.containers, ...fromComponents.components],
  providers: [...fromGuards.guards],
  entryComponents: [
    fromComponents.TicketComponent
  ]
})
export class DashboardModule { }
