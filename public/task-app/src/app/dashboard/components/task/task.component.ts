import { Component, OnInit, Input } from '@angular/core';

/* interface */
import { Task } from '@app/dashboard/models/interfaces/task.interface';

/* icons */
import { faUser } from '@fortawesome/free-solid-svg-icons';

/* animations */
import { animations } from '@app/dashboard/components/task/task.animations';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  animations: [ animations.slideDownOpacityTrigger ]
})
export class TaskComponent implements OnInit {
  faUser = faUser;
  @Input() task: Task;

  constructor() { }

  ngOnInit() {}

}
