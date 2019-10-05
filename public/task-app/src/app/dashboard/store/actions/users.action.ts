import { Action } from '@ngrx/store';

import { User } from '@app/dashboard/models';

// load users
export const LOAD_USERS = '[Task] Load Users';
export const LOAD_USERS_FAIL = '[Task] Load Users Fail';
export const LOAD_USERS_SUCCESS = '[Task] Load Users Success';

export class LoadUsers implements Action {
    readonly type = LOAD_USERS;
}

export class LoadUsersFail implements Action {
    readonly type = LOAD_USERS_FAIL;
    constructor(public payload: any) {}
}

export class LoadUsersSuccess implements Action {
    readonly type = LOAD_USERS_SUCCESS;
    constructor(public payload: User[]) {}
}


// action types
export type UsersAction =
| LoadUsers
| LoadUsersFail
| LoadUsersSuccess;
