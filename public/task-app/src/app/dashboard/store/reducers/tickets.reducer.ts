import * as fromTickets from '../actions/tickets.action';
import { Ticket } from '@app/dashboard/models';

export interface TicketState {
    entities: { [id: number]: Ticket };
    loaded: boolean;
    loading: boolean;
}

export const initialState: TicketState = {
    entities: {},
    loaded: false,
    loading: false
};

export function reducer(
 state = initialState,
 action: fromTickets.TicketAction
): TicketState {
    switch (action.type) {
        case fromTickets.LOAD_TICKETS: {
            return {
                ...state,
                loading: true
            };
        }
        case fromTickets.LOAD_TICKETS_SUCCESS: {
            const tickets = action.payload;

            const entities = tickets.reduce(
                // tslint:disable-next-line:no-shadowed-variable
                (entities: { [id: number]: Ticket }, ticket: Ticket) => {
                    return {
                        ...entities,
                        [ticket.id]: ticket
                    };
                },
                {
                    ...state.entities,
                }
            );

            return {
                ...state,
                loading: false,
                loaded: true,
                entities
            };
        }
        case fromTickets.LOAD_TICKETS_FAIL: {
            return {
              ...state,
              loading: false,
              loaded: false,
            };
        }
        case fromTickets.CREATE_TICKET_SUCCESS:
        case fromTickets.UPDATE_TICKET_SUCCESS: {
            const ticket = action.payload;
            const entities = {
                ...state.entities,
                [ticket.id]: ticket
            };

            return {
                ...state,
                entities
            };
        }
    }

    return state;

}

export const getTicketsEntities = (state: TicketState) => state.entities;
export const getTicketsLoading = (state: TicketState) => state.entities;
export const getTicketsLoaded = (state: TicketState) => state.loaded;
