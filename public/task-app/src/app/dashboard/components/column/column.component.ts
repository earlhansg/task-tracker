import { Component, Input, ViewChild, AfterContentInit,
         ViewContainerRef, ComponentFactoryResolver,
         Output, EventEmitter } from '@angular/core';
/* component */
import * as fromComponents from '@app/dashboard/components';
/* interface */
import { Ticket, User } from '@app/dashboard/models';
/* icons */
import { faArrowDown, faCog } from '@fortawesome/free-solid-svg-icons';
/* store */
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';

import { Observable } from 'rxjs';
@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements AfterContentInit {

  @Input() columnName: string;
  @Input() tickets: Ticket[];
  @Input() users: User[];
  @Output() updated: EventEmitter<Ticket> = new EventEmitter<Ticket>();

  @ViewChild('container', { static: true, read: ViewContainerRef }) container: ViewContainerRef;

  faArrowDown = faArrowDown;
  faCog = faCog;
  createdTickets = [];
  mockUsers: User[];
  loading: Observable<boolean>;
  userMap: Map<number, User>;

  constructor(private resolver: ComponentFactoryResolver,
              private store: Store<fromStore.TaskState>) {}

  ngAfterContentInit() {
    this.loading = this.store.select(fromStore.getTicketsLoading);
    console.log('check the status', this.loading);
    this.fetchUser();
    this.fetchTicket();
  }

  fetchUser() {
    // tslint:disable-next-line:no-string-literal
    const myMap = this.users.map<[number, User]>(user => [user.id, user]);
    this.userMap = new Map<number, User> (myMap);
  }

  createTicket(ticket: Ticket) {
    const ticketFactory = this.resolver.resolveComponentFactory(fromComponents.TicketComponent);
    const componentRef = this.container.createComponent(ticketFactory);
    componentRef.instance.ticket = ticket;
    componentRef.instance.users = this.userMap;
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
