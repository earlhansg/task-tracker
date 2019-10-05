import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromTickets from './tickets.reducer';
import * as fromUsers from './users.reducer';

export interface TaskState {
    tickets: fromTickets.TicketState;
    users: fromUsers.UserState;
}

export const reducers: ActionReducerMap<TaskState> = {
    tickets: fromTickets.reducer,
    users: fromUsers.reducer
};

export const getTaskState = createFeatureSelector<TaskState>(
    'task'
);
