import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

// import rxjs
import { Observable } from 'rxjs/Observable';
// import @ngrx
import { Store } from '@ngrx/store';
// reducers
import { TaskState, isAuthenticated } from '../../store';
import * as fromRoot from '@app/store';

@Injectable()
export class AuthenticatedGuard implements CanActivate {

  constructor(private store: Store<TaskState>) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    // get observable
    const observable = this.store.select(isAuthenticated);

    // redirect to sign in page if user is not authenticated
    observable.subscribe(authenticated => {
      if (!authenticated) {
        return new fromRoot.Go({
            path: ['/']
        });
      }
    });

    return observable;
  }
}
