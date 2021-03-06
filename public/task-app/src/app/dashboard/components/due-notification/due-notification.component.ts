import { Component, OnInit } from '@angular/core';

/* icons */
import { faUser, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-due-notification',
  templateUrl: './due-notification.component.html',
  styleUrls: ['./due-notification.component.scss']
})
export class DueNotificationComponent implements OnInit {
  faUser = faUser;
  faPlus = faPlus;

  constructor() { }

  ngOnInit() {}

}
