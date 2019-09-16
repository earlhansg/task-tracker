import { Component, OnInit, Input, ViewChild,
         ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';

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
  taskFactory;
  component: ComponentRef<fromComponents.TicketComponent>;

  constructor(private resolver: ComponentFactoryResolver) {}

  ngOnInit() {
    this.fetchTask();
  }

  createTask(ticket: Ticket) {
    this.taskFactory = this.resolver.resolveComponentFactory(fromComponents.TicketComponent);
    this.component = this.container.createComponent(this.taskFactory);
    this.component.instance.ticket = ticket;
    this.component.instance.move.subscribe(this.onMove);
  }

  fetchTask() {
    this.tickets.forEach((ticket: Ticket) =>
        ticket.columnName === this.columnName ? this.createTask(ticket) : null);
  }

  onMove(newColumn, ticket) {
    console.log('updated to', ticket);
    this.component.destroy();
  }

}
