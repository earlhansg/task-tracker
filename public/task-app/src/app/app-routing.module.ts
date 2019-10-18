import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'}
];

export const AppRouting = RouterModule.forRoot(routes, { useHash: false} );
