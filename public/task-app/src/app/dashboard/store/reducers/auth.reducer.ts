import * as fromAuth from '../actions/auth.action';
import { User } from '@app/dashboard/models';

export interface AuthState {
    authenticated: boolean;
    error?: string;
    loaded: boolean;
    loading: boolean;
    user?: User;
}

export const initialState: AuthState = {
    authenticated: false,
    loaded: false,
    loading: false
};

export function reducer(
    state = initialState,
    action: fromAuth.AuthAction
): AuthState {
    switch (action.type) {
        case fromAuth.AUTHENTICATE: {
            return Object.assign({}, state, {
                loading: true
            });
        }
        case fromAuth.AUTHENTICATED_FAIL: {
            return Object.assign({}, state, {
                authenticated: false,
                error: action.payload.error.message,
                loaded: true
            });
        }
        case fromAuth.AUTHENTICATED_SUCCESS: {
            return Object.assign({}, state, {
                authenticated: action.payload.authenticated,
                loaded: true,
                user: action.payload.user
              });
        }
        case fromAuth.AUTHENTICATE_FAIL: {
            return Object.assign({}, state, {
                authenticated: false,
                error: action.payload.error.message,
                loading: false
              });
        }
        case fromAuth.AUTHENTICATE_SUCCESS: {
            const user: User = action.payload.user;

            // verify user is not null
            if (user === null) {
                return state;
            }

            return Object.assign({}, state, {
                authenticated: true,
                error: undefined,
                loading: false,
                user
            });
        }
    }

    return state;
}

export const isAuthenticated = (state: AuthState) => state.authenticated;
export const isAuthenticatedLoaded = (state: AuthState) => state.loaded;
export const getAuthenticatedUser = (state: AuthState) => state.user;
export const getAuthenticationError = (state: AuthState) => state.error;
export const isLoading = (state: AuthState) => state.loading;
