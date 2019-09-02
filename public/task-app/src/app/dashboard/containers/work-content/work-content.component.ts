import { Component, ViewChildren, QueryList, OnInit } from '@angular/core';

import { ColumnComponent } from '@app/dashboard/components/column/column.component';

/* interface */
import { Task } from '@app/dashboard/models/interfaces/task.interface';

/* mock data */
import { task, tasks } from '@app/dashboard/containers/work-content/work.data';

/* icons */
import { faPlus } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-work-content',
  templateUrl: './work-content.component.html',
  styleUrls: ['./work-content.component.scss']
})
export class WorkContentComponent implements OnInit {
  faPlus = faPlus;
  column: ColumnComponent;
  @ViewChildren(ColumnComponent) columns: QueryList<ColumnComponent>;

  task: Task = task;
  mockData: Task[] = tasks;

  constructor() { }

  ngOnInit() {}

  addTask() {
    this.columns
        .forEach((item) => item.columnName === this.task.columnName
        ? item.createTask(this.task) : null);
  }

}
