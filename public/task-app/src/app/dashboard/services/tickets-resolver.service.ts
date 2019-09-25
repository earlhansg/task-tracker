import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { DashboardService } from './dashboard.service';

import { Ticket } from '@app/dashboard/models';


@Injectable({ providedIn: 'root' })
export class TicketsResolverService implements Resolve<Ticket[]> {
  constructor(private dashboardService: DashboardService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Ticket[]> {
    return this.dashboardService.getTickets();
  }

}
