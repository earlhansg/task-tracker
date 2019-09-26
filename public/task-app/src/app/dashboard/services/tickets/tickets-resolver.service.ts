import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { TicketsService } from './tickets.service';

import { Ticket } from '@app/dashboard/models';


@Injectable({ providedIn: 'root' })
export class TicketsResolverService implements Resolve<Ticket[]> {
  constructor(private ticketService: TicketsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Ticket[]> {
    return this.ticketService.getTickets();
  }

}
