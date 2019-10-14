import { Action } from '@ngrx/store';

import { User } from '@app/dashboard/models';

// authenticate user
export const AUTHENTICATE = '[User] Authenticate';
export const AUTHENTICATE_FAIL = '[User] Authenticate Fail';
export const AUTHENTICATE_SUCCESS = '[User] Authenticate Success';
export const AUTHENTICATED = '[User] Authenticate';
export const AUTHENTICATED_FAIL = '[User] Authenticated Fail';
export const AUTHENTICATED_SUCCESS = '[User] Authenticated Success';

export class Authenticate implements Action {
    readonly type = AUTHENTICATE;

    constructor(public payload: { username: string, password: string }) {}
}

export class Authenticated implements Action {
    readonly type = AUTHENTICATED;

    constructor(public payload?: {token?: string}) {}
}

export class AuthenticatedSuccess implements Action {
    readonly type = AUTHENTICATED_SUCCESS;

    constructor(public payload: {authenticated: boolean, user: User}) {}
}

export class AuthenticatedError implements Action {
    readonly type = AUTHENTICATED_FAIL;

    constructor(public payload?: any) {}
}

export class AuthenticationSuccess implements Action {
    readonly type = AUTHENTICATE_SUCCESS;

    constructor(public payload: { user: User }) {}
}

export class AuthenticationError implements Action {
    readonly type = AUTHENTICATE_FAIL;

    constructor(public payload?: any) {}
}

// authenticate type
export type AuthAction =
| Authenticate
| Authenticated
| AuthenticatedSuccess
| AuthenticatedError
| AuthenticationSuccess
| AuthenticationError;
