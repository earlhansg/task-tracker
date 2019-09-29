import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromTickets from './tickets.reducer';

export interface TaskState {
    tickets: fromTickets.TicketState;
}

export const reducers: ActionReducerMap<TaskState> = {
    tickets: fromTickets.reducer
};

export const getTaskState = createFeatureSelector<TaskState>(
    'task'
);
