import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// Component
import { DashboardComponent } from '@app/dashboard/containers/dashboard/dashboard.component';

// Modules
import { DashboardRouting } from '@app/dashboard/dashboard-routing.module';

@NgModule({
  imports: [
    CommonModule,
    // Custom Modules
    DashboardRouting
  ],
  declarations: [
    DashboardComponent
  ],
})
export class DashboardModule { }
