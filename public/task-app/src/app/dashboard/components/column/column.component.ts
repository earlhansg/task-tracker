import { Component, OnInit, Input, ViewChild, AfterContentInit,
         ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

/* component */
import { TaskComponent } from '@app/dashboard/components/task/task.component';
/* interface */
import { Task } from '@app/dashboard/models/interfaces/task.interface';
/* icons */
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {

  @Input() columnName: string;
  @Input() tasks: Task[];

  @ViewChild('container', { static: true, read: ViewContainerRef }) container: ViewContainerRef;

  faArrowDown = faArrowDown;

  constructor(private resolver: ComponentFactoryResolver) {}

  ngOnInit() {
    this.fetchTask();
  }

  createTask(task: Task) {
    const taskFactory = this.resolver.resolveComponentFactory(TaskComponent);
    const component = this.container.createComponent(taskFactory);
    component.instance.task = task;
  }

  fetchTask() {
    this.tasks.forEach((task: Task) =>
        task.columnName === this.columnName ? this.createTask(task) : null);
  }

}
