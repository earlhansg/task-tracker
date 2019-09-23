import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { UserProfile } from '@app/dashboard/models';
import { user } from '@app/dashboard/components/user-profile/user-profile.data';


@Component({
  selector: 'app-user-profile',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user: UserProfile = user;

  constructor() { }

  ngOnInit() {}

}
