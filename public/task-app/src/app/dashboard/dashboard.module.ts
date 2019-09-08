import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


/* Component */
import { DashboardComponent } from '@app/dashboard/containers/dashboard/dashboard.component';
import { UserProfileComponent } from '@app/dashboard/components/user-profile/user-profile.component';
import { TopNavigationComponent } from '@app/dashboard/components/top-navigation/top-navigation.component';
import { WorkContentComponent } from '@app/dashboard/containers/work-content/work-content.component';
import { DueNotificationComponent } from '@app/dashboard/components/due-notification/due-notification.component';
import { ColumnComponent } from '@app/dashboard/components/column/column.component';
import { TicketComponent } from '@app/dashboard/components/ticket/ticket.component';
import { CreateTicketFormComponent } from '@app/dashboard/components/create-ticket-form/create-ticket-form.component';

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
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TopNavigationComponent,
    WorkContentComponent,
    DueNotificationComponent,
    ColumnComponent,
    TicketComponent,
    CreateTicketFormComponent
  ],
  entryComponents: [
    TicketComponent
  ]
})
export class DashboardModule { }
