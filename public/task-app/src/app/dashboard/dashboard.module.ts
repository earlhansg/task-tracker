import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


/* Component */
import { DashboardComponent } from '@app/dashboard/containers/dashboard/dashboard.component';
import { UserProfileComponent } from '@app/dashboard/components/user-profile/user-profile.component';
import { TopNavigationComponent } from '@app/dashboard/components/top-navigation/top-navigation.component';
import { WorkContentComponent } from '@app/dashboard/containers/work-content/work-content.component';
import { DueNotificationComponent } from '@app/dashboard/components/due-notification/due-notification.component';
import { ColumnComponent } from '@app/dashboard/components/column/column.component';
import { TaskComponent } from '@app/dashboard/components/task/task.component';

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
    TaskComponent
  ],
  entryComponents: [
    TaskComponent
  ]
})
export class DashboardModule { }
