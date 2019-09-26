import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { RestService } from '@app/shared/services';

import { User } from '@app/dashboard/models';
import { HttpMethodEnum } from '@app/shared/enums';

@Injectable({ providedIn: 'root' })
export class UserService extends RestService {
 url = '/users';

 constructor(http: HttpClient,
             @Inject('API_URL') protected baseUrl: string) { super(http, baseUrl); }

 getUsers(): Observable<User[]> {
    return this.request(this.url, HttpMethodEnum.GET);
 }

}
