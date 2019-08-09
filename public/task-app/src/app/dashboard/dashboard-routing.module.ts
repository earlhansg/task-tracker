import { RouterModule, Routes } from '@angular/router';

// Component
import { DashboardComponent } from '@app/dashboard/containers/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent }
];

export const DashboardRouting = RouterModule.forChild(routes);
