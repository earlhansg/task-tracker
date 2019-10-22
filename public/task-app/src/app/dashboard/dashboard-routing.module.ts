import { RouterModule, Routes } from '@angular/router';

// Containers
import * as fromContainers from '@app/dashboard/containers';

// Guards
import * as fromGuards from './store/guards';

const routes: Routes = [
  {
    path: '',
    component: fromContainers.DashboardComponent,
    // canActivate: [ fromGuards.AuthenticatedGuard ],
    children: [
      {
        path: 'work',
        canActivate: [fromGuards.TicketsGuard, fromGuards.UsersGuard],
        component: fromContainers.WorkContentComponent
      },
      { path: '', redirectTo: 'work', pathMatch: 'full' },
      { path: '**', component: fromContainers.PageNotFoundComponent }
    ]
  }
];

export const DashboardRouting = RouterModule.forChild(routes);
