import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// Component
import { DashboardComponent } from '@app/dashboard/containers/dashboard/dashboard.component';
import { SidebarComponent } from '@app/dashboard/components/sidebar/sidebar.component';

// Modules
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
    SidebarComponent
  ],
})
export class DashboardModule { }
