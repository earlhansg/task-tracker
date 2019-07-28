import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule' }
];

export const AppRouting = RouterModule.forRoot(routes, { useHash: false} );
