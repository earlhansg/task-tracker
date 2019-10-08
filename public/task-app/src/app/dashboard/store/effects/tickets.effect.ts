import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { of, timer } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as ticketActions from '../actions/tickets.action';
import * as fromServices from '@app/dashboard/services';
import * as fromRoot from '@app/store';

@Injectable()
export class TicketsEffects {
    constructor(
      private actions$: Actions,
      private ticketService: fromServices.TicketsService
    ) {}

@Effect()
loadTickets$ =  this.actions$.pipe(
    ofType(ticketActions.LOAD_TICKETS),
    switchMap(() => {
        return this.ticketService.getTickets()
        .pipe(
            map(tickets => new ticketActions.LoadTicketsSuccess(tickets)),
            catchError(error => of(new ticketActions.LoadTicketsFail(error)))
        );
    })
);

@Effect()
createTicket$ = this.actions$.pipe(
    ofType(ticketActions.CREATE_TICKET),
    map((action: ticketActions.CreateTicket) => action.payload),
    switchMap(ticket => {
        return this.ticketService.addTicket(ticket)
        .pipe(
            // tslint:disable-next-line:no-shadowed-variable
            map(ticket => new ticketActions.CreateTicketSuccess(ticket)),
            catchError(error => of(new ticketActions.CreateTicketFail(error)))
        );
    })
);

// @Effect()
//   createTicketSuccess$ = this.actions$.pipe(
//     ofType(ticketActions.CREATE_TICKET_SUCCESS),
//     map((action: ticketActions.CreateTicketSuccess) => action.payload),
//     map(pizza => {
//         return new fromRoot.Go({
//           path: ['/work']
//         });
//     })
// );

}
