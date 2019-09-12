import { Component, OnInit, Input } from '@angular/core';

/* interface */
import { Ticket } from '@app/dashboard/models';

/* icons */
import { faUser, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

/* animations */
import { animations } from '@app/dashboard/components/ticket/ticket.animations';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
  animations: [ animations.slideDownOpacityTrigger ]
})
export class TicketComponent implements OnInit {
  faUser = faUser;
  faEllipsisV = faEllipsisV;
  @Input() ticket: Ticket;
  columns = [
    { id: 1, name: 'Backlog' },
    { id: 2, name: 'In Progress' },
    { id: 3, name: 'Review' }
  ];

  constructor() { }

  ngOnInit() {}

}
