import { createSelector } from '@ngrx/store';

import * as fromRoot from '@app/store';
import * as fromFeature from '../reducers';
import * as fromTickets from '../reducers/tickets.reducer';

import { Ticket } from '@app/dashboard/models';

export const getTicketState = createSelector(
    fromFeature.getTaskState,
    (state: fromFeature.TaskState) => state.tickets
);

export const getTicketEntities = createSelector(
    getTicketState,
    fromTickets.getTicketsEntities
);

export const getSelectedTickets = createSelector(
    getTicketEntities,
    fromRoot.getRouterState,
    (entities, router): Ticket => {
        return router.state && entities[router.state.params.ticketId];
    }
);

export const getAllTickets = createSelector(getTicketEntities, entities => {
    return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});

export const getTicketsLoaded = createSelector(
    getTicketState,
    fromTickets.getTicketsLoaded
);

export const getTicketsLoading = createSelector(
    getTicketState,
    fromTickets.getTicketsLoading
);
