import { Component, OnInit, Input } from '@angular/core';

/* interface */
import { Task } from '@app/dashboard/models/interfaces/task.interface';

/* icons */
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  faUser = faUser;
  @Input() task: Task;

  constructor() { }

  ngOnInit() {}

}
