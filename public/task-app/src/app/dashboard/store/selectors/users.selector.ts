import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromUsers from '../reducers/users.reducer';

export const getUserState = createSelector(
    fromFeature.getTaskState,
    (state: fromFeature.TaskState) => state.users
);

export const getUserEntities = createSelector(
    getUserState,
    fromUsers.getUsersEntities
);

export const getAllUsers = createSelector(getUserEntities, entities => {
    return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});

export const getUsersLoaded = createSelector(
    getUserState,
    fromUsers.getUsersLoaded
);

export const getUsersLoading = createSelector(
    getUserState,
    fromUsers.getUsersLoading
);
