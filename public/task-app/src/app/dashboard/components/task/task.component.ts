import { Component, OnInit, Input } from '@angular/core';
/* icons */
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  faUser = faUser;

  constructor() { }

  ngOnInit() {}

}
