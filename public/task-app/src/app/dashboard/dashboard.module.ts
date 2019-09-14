import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Components */
import * as fromComponents from '@app/dashboard/components';

/* Containers */
import * as fromContainers from '@app/dashboard/containers';

/* Modules */
import { DashboardRouting } from '@app/dashboard/dashboard-routing.module';
import { SharedModule } from '@app/shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    // Custom Modules
    DashboardRouting,
    SharedModule,
    FlexLayoutModule
  ],
  declarations: [...fromContainers.containers, ...fromComponents.components],
  exports: [...fromContainers.containers, ...fromComponents.components],
  entryComponents: [
    fromComponents.TicketComponent
  ]
})
export class DashboardModule { }
