import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import { FormComponent } from '@app/shared/components/form/form.component';

import { Credentials } from '@app/shared/models/credentials/credentials.model';

import { tabs, Tab } from '@app/home/components/login-signup/login-signup.data';

// store
import { Store } from '@ngrx/store';
import * as fromStore from '@app/dashboard/store';
import * as fromRoot from '@app/store';
import { Observable } from 'rxjs';
import { takeWhile, filter } from 'rxjs/operators';

@Component({
  selector: 'app-login-signup',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent implements OnInit, OnDestroy {
  @ViewChild(FormComponent, {static: false}) formComponent: FormComponent;

  tabs: Tab[] = tabs;

  error: Observable<string>;
  loading: Observable<boolean>;

  private alive = true;

  constructor(private store: Store<fromStore.TaskState>) { }

  ngOnInit() {
    this.error = this.store.select(fromStore.getAuthenticationError);
    this.loading = this.store.select(fromStore.isAuthenticationLoading);
    this.store.select(fromStore.isAuthenticated)
      .pipe(
        takeWhile(() => this.alive),
        filter(authenticated => authenticated)
      )
      .subscribe(value => {
        this.store.dispatch(
          new fromRoot.Go({
            path: ['/dashboard']
          })
        );
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }

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
