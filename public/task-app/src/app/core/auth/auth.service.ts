import { Injectable } from '@angular/core';

import { Observable, throwError, of } from 'rxjs';
import { User } from '@app/dashboard/models';

export const MOCK_USER = new User();
MOCK_USER.id = 1;
MOCK_USER.username = 'password';
MOCK_USER.firstName = 'Foo';
MOCK_USER.lastName = 'Bar';
MOCK_USER.password = 'password';

/**
 * The user service.
 */
@Injectable({ providedIn: 'root' })
export class AuthService {

  // tslint:disable-next-line:variable-name
  private _authenticated = false;

  authenticate(username: string, password: string): Observable<User> {
    if (username === MOCK_USER.username && password === MOCK_USER.password) {
        this._authenticated = true;
        return of(MOCK_USER);
    }
    return throwError(new Error('Invalid email or password'));
  }

  authenticated(): Observable<boolean> {
    return of(this._authenticated);
  }

  authenticatedUser(): Observable<User> {
    return of(MOCK_USER);
  }

  create(user: User): Observable<User> {
   // Normally you would do an HTTP request to POST the user
   // details and then return the new user object
   // but, let's just return the new user for this example.
   this._authenticated = true;
   return of(user);
  }

  signout(): Observable<boolean> {
   // Normally you would do an HTTP request sign end the session
   // but, let's just return an observable of true.
   this._authenticated = false;
   return of(true);
  }

}
