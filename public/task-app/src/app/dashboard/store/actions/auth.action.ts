import { Action } from '@ngrx/store';

import { User } from '@app/dashboard/models';

// authenticate user
export const AUTHENTICATE = '[User] Authenticate';
export const AUTHENTICATE_FAIL = '[User] Authenticate Fail';
export const AUTHENTICATE_SUCCESS = '[User] Authenticate Success';
export const AUTHENTICATED = '[User] Authenticate';
export const AUTHENTICATED_FAIL = '[User] Authenticated Fail';
export const AUTHENTICATED_SUCCESS = '[User] Authenticated Success';
export const SIGN_UP = '[User] Sign up';
export const SIGN_UP_ERROR = '[User] Sign up error';
export const SIGN_UP_SUCCESS = '[User] Sign up success';
export const SIGN_OUT = '[User] Sign out';
export const SIGN_OUT_ERROR = '[User] Sign out error';
export const SIGN_OUT_SUCCESS = '[User] Sign out success';


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

export class SignUp implements Action {
    readonly type = SIGN_UP;

    constructor(public payload: { user: User }) {}
}

export class SignUpError implements Action {
    readonly type = SIGN_UP_ERROR;

    constructor(public payload?: any) {}
}

export class SignUpSuccess implements Action {
    readonly type = SIGN_UP_SUCCESS;

    constructor(public payload: { user: User }) {}
}

export class SignOut implements Action {
    readonly type = SIGN_UP;

    constructor(public payload?: any) {}
}

export class SignOutError implements Action {
    readonly type = SIGN_UP_ERROR;

    constructor(public payload?: any) {}
}

export class SignOutSuccess implements Action {
    readonly type = SIGN_UP_SUCCESS;

    constructor(public payload?: any) {}
}

// authenticate type
export type AuthAction =
| Authenticate
| Authenticated
| AuthenticatedSuccess
| AuthenticatedError
| AuthenticationSuccess
| AuthenticationError
| SignUp
| SignUpError
| SignUpSuccess
| SignOut
| SignOutError
| SignOutSuccess;
