import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromAuth from '../reducers/auth.reducer';

export const getAuthState = createSelector(
    fromFeature.getTaskState,
    (state: fromFeature.TaskState) => state.auth
);

export const getAuthenticatedUser = createSelector(getAuthState, fromAuth.getAuthenticatedUser);
export const getAuthenticationError = createSelector(getAuthState, fromAuth.getAuthenticationError);
export const isAuthenticated = createSelector(getAuthState, fromAuth.isAuthenticated);
export const isAuthenticatedLoaded = createSelector(getAuthState, fromAuth.isLoaded);
export const isAuthenticationLoading = createSelector(getAuthState, fromAuth.isLoading);
export const signUpError = createSelector(getAuthState, fromAuth.signUpError);
export const signOutError = createSelector(getAuthState, fromAuth.signOutError);
