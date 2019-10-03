import { RouterModule, Routes } from '@angular/router';

import { TicketsResolverService, UserResolverService } from '@app/dashboard/services';

// Containers
import * as fromContainers from '@app/dashboard/containers';

// Guards
import * as fromGuards from './store/guards';

const routes: Routes = [
  {
    path: '',
    component: fromContainers.DashboardComponent,
    children: [
      {
        path: 'work',
        canActivate: [fromGuards.TicketsGuard],
        component: fromContainers.WorkContentComponent,
        // resolve: {
        //   tickets: TicketsResolverService,
        //   users: UserResolverService
        // }
      },
      { path: '', redirectTo: 'work', pathMatch: 'full' }
    ]
  }
];

export const DashboardRouting = RouterModule.forChild(routes);
