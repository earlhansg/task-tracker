import { RouterModule, Routes } from '@angular/router';

import { TicketsResolverService } from '@app/dashboard/services/tickets-resolver.service';

// Containers
import * as fromContainers from '@app/dashboard/containers';

const routes: Routes = [
  {
    path: '',
    component: fromContainers.DashboardComponent,
    children: [
      {
        path: 'work',
        component: fromContainers.WorkContentComponent,
        resolve: {
          tickets: TicketsResolverService
        }
      },
      { path: '', redirectTo: 'work', pathMatch: 'full' }
    ]
  }
];

export const DashboardRouting = RouterModule.forChild(routes);
