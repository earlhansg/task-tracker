import { Component, OnInit, Input } from '@angular/core';

/* interface */
import { Ticket } from '@app/dashboard/models';

/* icons */
import { faUser } from '@fortawesome/free-solid-svg-icons';

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
  @Input() ticket: Ticket;

  constructor() { }

  ngOnInit() {}

}
