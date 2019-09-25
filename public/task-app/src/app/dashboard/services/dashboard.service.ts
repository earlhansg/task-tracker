import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { RestService } from '@app/shared/services';

import { Ticket } from '@app/dashboard/models';
import { HttpMethodEnum } from '@app/shared/enums';

@Injectable({ providedIn: 'root' })
export class DashboardService extends RestService {
 url = '/tickets';

 constructor(http: HttpClient,
             @Inject('API_URL') protected baseUrl: string) { super(http, baseUrl); }

 getTickets(): Observable<Ticket[]> {
     return this.request(this.url, HttpMethodEnum.GET);
 }

 addTicket(body: Ticket): Observable<Ticket> {
     return this.request(this.url, HttpMethodEnum.POST);
 }

 updateTicket(body: Ticket): Observable<Ticket> {
    return this.request(this.url, HttpMethodEnum.PUT);
 }

 deleteTicket(id: number): Observable<Ticket> {
    return this.request(this.url, HttpMethodEnum.DEL);
 }

}
