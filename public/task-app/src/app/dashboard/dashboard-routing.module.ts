import { RouterModule, Routes } from '@angular/router';

// Containers
import * as fromContainers from '@app/dashboard/containers';

const routes: Routes = [
  {
    path: '',
    component: fromContainers.DashboardComponent,
    children: [
      {
        path: 'work',
        component: fromContainers.WorkContentComponent
      },
      { path: '', redirectTo: 'work', pathMatch: 'full' }
    ]
  }
];

export const DashboardRouting = RouterModule.forChild(routes);
