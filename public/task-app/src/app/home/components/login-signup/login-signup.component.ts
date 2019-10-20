import { Component, OnInit, ViewChild, AfterViewInit,
         ChangeDetectionStrategy } from '@angular/core';

import { FormComponent } from '@app/shared/components/form/form.component';

import { Credentials } from '@app/shared/models/credentials/credentials.model';

import { tabs, Tab } from '@app/home/components/login-signup/login-signup.data';

// store
import { Store } from '@ngrx/store';
import * as fromStore from '@app/dashboard/store';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-login-signup',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent implements OnInit, AfterViewInit {
  @ViewChild(FormComponent, {static: false}) formComponent: FormComponent;

  tabs: Tab[] = tabs;

  error: Observable<boolean>;
  loading: Observable<boolean>;
  loaded: Observable<boolean>;

  constructor(private store: Store<fromStore.TaskState>) { }

  ngOnInit() {
    this.error = this.store.select(fromStore.getAuthenticationError);
  }
  ngAfterViewInit() {
    this.formComponent.isLoading = this.store.select(fromStore.isAuthenticationLoading);
  }

  selectTab(index: number): void {
    this.formComponent.form.reset();
    this.error = of(!this.error);
    this.loaded = of(!this.loaded);
  }

  onSubmittedForm(credentials: Credentials): void {
    const { username, password } = credentials;
    const payload = { username, password };
    this.store.dispatch(new fromStore.Authenticate(payload));
    this.loaded = this.store.select(fromStore.isAuthenticatedLoaded);
  }
}
