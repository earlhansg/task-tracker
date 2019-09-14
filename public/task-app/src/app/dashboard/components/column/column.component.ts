import { Component, OnInit, Input, ViewChild, AfterContentInit,
         ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

/* component */
import * as fromComponents from '@app/dashboard/components';
/* interface */
import { Ticket } from '@app/dashboard/models';
/* icons */
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {

  @Input() columnName: string;
  @Input() tickets: Ticket[];

  @ViewChild('container', { static: true, read: ViewContainerRef }) container: ViewContainerRef;

  faArrowDown = faArrowDown;

  constructor(private resolver: ComponentFactoryResolver) {}

  ngOnInit() {
    this.fetchTask();
  }

  createTask(ticket: Ticket) {
    const taskFactory = this.resolver.resolveComponentFactory(fromComponents.TicketComponent);
    const component = this.container.createComponent(taskFactory);
    component.instance.ticket = ticket;
  }

  fetchTask() {
    this.tickets.forEach((ticket: Ticket) =>
        ticket.columnName === this.columnName ? this.createTask(ticket) : null);
  }

}
