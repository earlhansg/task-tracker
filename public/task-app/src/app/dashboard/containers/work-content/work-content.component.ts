import { Component, ViewChildren, QueryList, AfterContentInit } from '@angular/core';

import { ColumnComponent } from '@app/dashboard/components/column/column.component';

/* interface */
import { Task } from '@app/dashboard/models/interfaces/task.interface';

/* mock data */
import { task } from '@app/dashboard/containers/work-content/work.data';

/* icons */
import { faPlus } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-work-content',
  templateUrl: './work-content.component.html',
  styleUrls: ['./work-content.component.scss']
})
export class WorkContentComponent implements AfterContentInit {
  faPlus = faPlus;
  @ViewChildren(ColumnComponent) columns: QueryList<ColumnComponent>;

  task: Task = task;

  constructor() { }

  ngAfterContentInit() {}

  addTask() {
    this.columns
        .forEach((item) => item.columnName === this.task.columnName
        ? item.addTask(this.task) : null);
  }

}
