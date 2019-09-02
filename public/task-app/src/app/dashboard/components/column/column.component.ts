import { Component, OnInit, Input, ViewChild,
         ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

/* component */
import { TaskComponent } from '@app/dashboard/components/task/task.component';

/* icons */
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {
  @Input() columnName: string;
  @ViewChild('container', { static: true, read: ViewContainerRef }) container: ViewContainerRef;

  faArrowDown = faArrowDown;

  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit() {}

  addTask(task) {
    // console.log('emitted data', this.columnName, task);
    const taskFactory = this.resolver.resolveComponentFactory(TaskComponent);
    const component = this.container.createComponent(taskFactory);
    component.instance.task = task;
  }

}
