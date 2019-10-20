import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import { FormComponent } from '@app/shared/components/form/form.component';

import { Credentials } from '@app/shared/models/credentials/credentials.model';

import { tabs, Tab } from '@app/home/components/login-signup/login-signup.data';

// store
import { Store } from '@ngrx/store';
import * as fromStore from '@app/dashboard/store';

@Component({
  selector: 'app-login-signup',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent implements OnInit {
  @ViewChild(FormComponent, {static: false}) formComponent: FormComponent;

  tabs: Tab[] = tabs;

  constructor(private store: Store<fromStore.TaskState>) { }

  ngOnInit() {}

  selectTab(index: number): void {
    this.formComponent.form.reset();
  }

  onSubmittedForm(credentials: Credentials): void {
    console.log('login-signup', credentials);
    const { username, password } = credentials;
    const payload = { username, password };

    this.store.dispatch(new fromStore.Authenticate(payload));
  }
}
