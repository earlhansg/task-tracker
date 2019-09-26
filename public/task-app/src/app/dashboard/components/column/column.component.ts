import { Component, Input, ViewChild, AfterContentInit,
         ViewContainerRef, ComponentFactoryResolver,
         Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
/* component */
import * as fromComponents from '@app/dashboard/components';
/* interface */
import { Ticket, User } from '@app/dashboard/models';
/* icons */
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
/* mock data */
import { users } from '@app/dashboard/containers/work-content/work.data';
@Component({
  selector: 'app-column',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements AfterContentInit {

  @Input() columnName: string;
  @Input() tickets: Ticket[];
  @Input() users: Map<number, User>;
  @Output() updated: EventEmitter<Ticket> = new EventEmitter<Ticket>();

  @ViewChild('container', { static: true, read: ViewContainerRef }) container: ViewContainerRef;

  faArrowDown = faArrowDown;
  createdTickets = [];
  // mockUsers: User[] = users;
  mockUsers: User[];
  userMap: Map<number, User>;

  constructor(private resolver: ComponentFactoryResolver,
              private activeRoute: ActivatedRoute) {
    // const myMap = this.mockUsers.map<[number, User]>(user => [user.id, user]);
    // this.userMap = new Map<number, User> (myMap);
  }

  ngAfterContentInit() {
    this.fetchUser();
    this.fetchTicket();
  }

  fetchUser() {
    console.log('fetch user');
    // tslint:disable-next-line:no-string-literal
    this.mockUsers = this.activeRoute.snapshot.data['users'];
    const myMap = this.mockUsers.map<[number, User]>(user => [user.id, user]);
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
