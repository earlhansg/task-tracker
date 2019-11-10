import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs';
import { tap, filter, take, switchMap, catchError } from 'rxjs/operators';

import * as fromStore from '../../store';

import * as fromServices from '@app/dashboard/services';

@Injectable()
export class TicketsGuard implements CanActivate {
    constructor(private store: Store<fromStore.TaskState>,
                private localStorageService: fromServices.LocalStorageService) {}

    canActivate(): Observable<boolean> {
        return this.checkStore().pipe(
            switchMap(() => of(true)),
            catchError(() => of(false))
        );
    }

    checkStore(): Observable<boolean> {
        return this.store.select(fromStore.getTicketsLoaded).pipe(
            tap(loaded => {
                if (!loaded) {
                    this.checkLocalStorage();
                    this.store.dispatch(new fromStore.LoadTickets());
                }
            }),
            filter(loaded => loaded),
            take(1)
        );
    }

    async checkLocalStorage() {
        if (!!this.localStorageService.fetchUpdate.length) {
            const updatedTicket = await this.localStorageService.fetchUpdate('tickets').toPromise();
            console.log(updatedTicket);
        }
    }

}
