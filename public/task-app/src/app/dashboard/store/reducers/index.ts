import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromTickets from './tickets.reducer';
import * as fromUsers from './users.reducer';
import * as fromAuth from './auth.reducer';

export interface TaskState {
    tickets: fromTickets.TicketState;
    users: fromUsers.UserState;
    auth: fromAuth.AuthState;
}

export const reducers: ActionReducerMap<TaskState> = {
    tickets: fromTickets.reducer,
    users: fromUsers.reducer,
    auth: fromAuth.reducer
};

export const getTaskState = createFeatureSelector<TaskState>(
    'task'
);
