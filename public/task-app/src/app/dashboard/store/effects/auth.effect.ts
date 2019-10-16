import { Injectable } from '@angular/core';


// import @ngrx
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

import * as authActions from '../actions/auth.action';
import * as fromCore from '@app/core/auth/auth.service';
import { debounceTime, map, switchMap, catchError } from 'rxjs/operators';

@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions,
        private authService: fromCore.AuthService
    ) {}

@Effect()
authenticate = this.actions$.pipe(
    ofType(authActions.AUTHENTICATE),
    debounceTime(500),
    map((action: authActions.Authenticate) => action.payload),
    switchMap(payload => {
        return this.authService.authenticate(payload.username, payload.password)
        .pipe(
            map(user => new authActions.AuthenticatedSuccess({ authenticated: (user !== null ), user })),
            catchError(error => of( new authActions.AuthenticatedError({ error })))
        );
    })
);
}
