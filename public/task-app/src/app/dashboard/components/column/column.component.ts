import { Component, OnInit, Input, ViewChild, AfterContentInit,
         ViewContainerRef, ComponentFactoryResolver, ComponentRef,
         Output, EventEmitter, ViewChildren, QueryList } from '@angular/core';

/* component */
import * as fromComponents from '@app/dashboard/components';
/* interface */
import { Ticket } from '@app/dashboard/models';
/* icons */
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { tickets } from '@app/dashboard/containers/work-content/work.data';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements AfterContentInit {

  @Input() columnName: string;
  @Input() tickets: Ticket[];
  @Output() updated: EventEmitter<Ticket> = new EventEmitter<Ticket>();

  @ViewChild('container', { static: true, read: ViewContainerRef }) container: ViewContainerRef;

  faArrowDown = faArrowDown;
  taskFactory;
  component: ComponentRef<fromComponents.TicketComponent>;
  filtered;

  constructor(private resolver: ComponentFactoryResolver) {}

  ngAfterContentInit() {
    // this.filtered = this.tickets.filter(item => item.columnName === this.columnName).length;
    console.log(this.filtered);
    this.fetchTask();
  }

  createTask(ticket: Ticket, i) {
    console.log(i);
    this.taskFactory = this.resolver.resolveComponentFactory(fromComponents.TicketComponent);
    this.component = this.container.createComponent(this.taskFactory, i);
    // // console.log(index);
    this.component.instance.index = i;
    this.component.instance.ticket = ticket;
    this.component.instance.move.subscribe((task, ind) => {
      this.onMove(task, ind);
    });
  }

  fetchTask() {
    let filtered = this.tickets.filter(item => item.columnName === this.columnName).length - 1;
    // this.tickets.forEach((ticket: Ticket) =>
    //     ticket.columnName === this.columnName ? this.createTask(ticket) : null);
    this.tickets.forEach((ticket: Ticket) => {
      if (ticket.columnName === this.columnName) {
        this.createTask(ticket, filtered);
        filtered--;
      }
    });
  }


  onMove(updatedTask, index) {
    console.log(index);
    // this.updated.emit(updatedTask);
    // const index = this.container.indexOf(component.hostView);
    // console.log(index);
    this.container.remove(index);
    // this.container
    // this.container.remove()
  }

}
