import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


/* Component */
import { DashboardComponent } from '@app/dashboard/containers/dashboard/dashboard.component';
import { UserProfileComponent } from '@app/dashboard/components/user-profile/user-profile.component';
import { TopNavigationComponent } from '@app/dashboard/components/top-navigation/top-navigation.component';

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
    TopNavigationComponent
  ],
})
export class DashboardModule { }
