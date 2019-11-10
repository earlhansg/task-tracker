import { Injectable } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Ticket } from '@app/dashboard/models';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  constructor(private storage: LocalStorage) {}

  storeUpdate(tickets: Ticket[]) {
      this.storage.setItem('tickets', tickets).subscribe(() => {});
  }

  fetchUpdate(key: string) {
    return this.storage.getItem(key);
  }

  clearUpdate() {
    this.storage.clear().subscribe(() => {});
  }
}
