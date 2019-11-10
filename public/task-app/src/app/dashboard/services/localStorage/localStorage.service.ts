import { Injectable } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';
import { Ticket } from '@app/dashboard/models';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  constructor(private storage: StorageMap) {}

  storeUpdate(tickets: Ticket[] ) {
      this.storage.set('tickets', JSON.stringify(tickets)).subscribe(() => {});
  }

  fetchUpdate() {
    this.storage.get('tickets').subscribe((data) => {
        // tslint:disable-next-line:no-unused-expression
        data;
    });
  }

  clearUpdate() {
    this.storage.clear().subscribe(() => {});
  }
}
