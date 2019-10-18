import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

// import rxjs
import { Observable } from 'rxjs/Observable';
// import @ngrx
import { Store } from '@ngrx/store';
// reducers
import { TaskState, isAuthenticated } from '../../store';


@Injectable()
export class AuthenticatedGuard implements CanActivate {

  constructor(private store: Store<TaskState>,
              private router: Router) {}

  canActivate(): Observable<boolean> | boolean {
    // get observable
    const observable = this.store.select(isAuthenticated);

    // redirect to root page if user is not authenticated
    observable.subscribe(authenticated => {
      if (!authenticated) {
        this.router.navigate(['/']);
      }
    });

    return observable;
  }
}
