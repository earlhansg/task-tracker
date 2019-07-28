import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '@app/home/containers/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent }
];

export const HomeRouting = RouterModule.forChild(routes);
