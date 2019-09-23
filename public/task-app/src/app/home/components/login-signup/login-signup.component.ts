import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import { FormComponent } from '@app/shared/components/form/form.component';

import { Credentials } from '@app/shared/models/credentials/credentials.model';

import { tabs, Tab } from '@app/home/components/login-signup/login-signup.data';

@Component({
  selector: 'app-login-signup',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent implements OnInit {
  @ViewChild(FormComponent, {static: false}) formComponent: FormComponent;

  tabs: Tab[] = tabs;

  constructor() { }

  ngOnInit() {}

  selectTab(index: number): void {
    this.formComponent.form.reset();
  }

  onSubmittedForm(credentials: Credentials): void {
    console.log('login-signup', credentials);
  }
}
