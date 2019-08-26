import { RouterModule, Routes } from '@angular/router';

// Component
import { DashboardComponent } from '@app/dashboard/containers/dashboard/dashboard.component';
import { WorkContentComponent } from '@app/dashboard/components/work-content/work-content.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'work',
        component: WorkContentComponent
      },
      { path: '', redirectTo: 'work', pathMatch: 'full' }
    ]
  }
];

export const DashboardRouting = RouterModule.forChild(routes);
