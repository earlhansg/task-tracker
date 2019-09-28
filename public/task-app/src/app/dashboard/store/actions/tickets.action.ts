import { Action } from '@ngrx/store';

import { Ticket } from '@app/dashboard/models';

// load tickets
export const LOAD_TICKETS = '[Task] Load Tickets';
export const LOAD_TICKETS_FAIL = '[Task] Load Tickets Fail';
export const LOAD_TICKETS_SUCCESS = '[Task] Load Tickets Success';

export class LoadTickets implements Action {
    readonly type = LOAD_TICKETS;
}

export class LoadTicketsFail implements Action {
    readonly type = LOAD_TICKETS_FAIL;
    constructor(public payload: any) {}
}

export class LoadTicketsSuccess implements Action {
    readonly type = LOAD_TICKETS_SUCCESS;
    constructor(public payload: Ticket[]) {}
}

// create ticket
export const CREATE_TICKET = '[Task] Create Ticket';
export const CREATE_TICKET_FAIL = '[Task] Create Ticket Fail';
export const CREATE_TICKET_SUCCESS = '[Task] Create Ticket Success';

export class CreateTicket implements Action {
    readonly type = CREATE_TICKET;
    constructor(public payload: Ticket) {}
}

export class CreateTicketFail implements Action {
    readonly type = CREATE_TICKET_FAIL;
    constructor(public payload: any) {}
}

export class CreateTicketSuccess implements Action {
    readonly type = CREATE_TICKET_SUCCESS;
    constructor(public payload: Ticket) {}
}

// update ticket
export const UPDATE_TICKET = '[Task] Update Ticket';
export const UPDATE_TICKET_FAIL = '[Task] Update Ticket Fail';
export const UPDATE_TICKET_SUCCESS = '[Task] Update Ticket Success';

export class UpdateTicket implements Action {
    readonly type = UPDATE_TICKET;
    constructor(public payload: Ticket) {}
}

export class UpdateTicketFail implements Action {
    readonly type = UPDATE_TICKET_FAIL;
    constructor(public payload: any) {}
}

export class UpdateTicketSuccess implements Action {
    readonly type = UPDATE_TICKET_SUCCESS;
    constructor(public payload: Ticket) {}
}

// action types
export type TicketAction =
| LoadTickets
| LoadTicketsFail
| LoadTicketsSuccess
| CreateTicket
| CreateTicketFail
| CreateTicketSuccess
| UpdateTicket
| UpdateTicketFail
| UpdateTicketSuccess;
