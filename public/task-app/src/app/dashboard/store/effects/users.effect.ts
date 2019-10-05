import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as userActions from '../actions/users.action';
import * as fromServices from '@app/dashboard/services';

@Injectable()
export class UsersEffects {
    constructor(
      private actions$: Actions,
      private userService: fromServices.UserService
    ) {}

@Effect()
loadUsers$ =  this.actions$.pipe(
    ofType(userActions.LOAD_USERS),
    switchMap(() => {
        return this.userService.getUsers()
        .pipe(
            map(users => new userActions.LoadUsersSuccess(users)),
            catchError(error => of(new userActions.LoadUsersFail(error)))
        );
    })
);
}
