import { Component, Input, ViewChild, AfterContentInit,
         ViewContainerRef, ComponentFactoryResolver,
         Output, EventEmitter } from '@angular/core';

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
export class ColumnComponent implements AfterContentInit {

  @Input() columnName: string;
  @Input() tickets: Ticket[];
  @Output() updated: EventEmitter<Ticket> = new EventEmitter<Ticket>();

  @ViewChild('container', { static: true, read: ViewContainerRef }) container: ViewContainerRef;

  faArrowDown = faArrowDown;
  createdTickets = [];

  constructor(private resolver: ComponentFactoryResolver) {}

  ngAfterContentInit() {
    this.fetchTicket();
  }

  createTicket(ticket: Ticket) {
    const ticketFactory = this.resolver.resolveComponentFactory(fromComponents.TicketComponent);
    const componentRef = this.container.createComponent(ticketFactory);
    componentRef.instance.ticket = ticket;
    componentRef.instance.remove.subscribe((removeticket) => this.onRemove(removeticket));
    const instance: fromComponents.TicketComponent = componentRef.instance as fromComponents.TicketComponent;

    this.createdTickets.push(componentRef);
  }

  fetchTicket() {
    this.tickets.forEach((ticket: Ticket) =>
        ticket.columnName === this.columnName ? this.createTicket(ticket) : null);
  }


  onRemove(removeticket: Ticket) {
    const ticketIndex = this.createdTickets.findIndex(({ instance }) =>
      instance.ticket.id === removeticket.id);
    this.container.remove(ticketIndex);
    this.createdTickets.splice(ticketIndex, 1);
    this.updated.emit(removeticket);
  }

}
