import { Component, OnInit } from '@angular/core';

import { UserProfile } from '@app/dashboard/models/interfaces/user.interface';
import { user } from '@app/dashboard/components/user-profile/user-profile.data';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user: UserProfile = user;

  constructor() { }

  ngOnInit() {}

}
