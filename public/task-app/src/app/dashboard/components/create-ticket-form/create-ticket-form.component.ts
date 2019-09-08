import { Component, OnInit } from '@angular/core';

/* data */
import { ticket, TicketForm } from '@app/dashboard/components/create-ticket-form/create-ticket-form.data';
/* service*/
import { FormService } from '@app/shared/services/form/form.service';



@Component({
  selector: 'app-create-ticket-form',
  templateUrl: './create-ticket-form.component.html',
  styleUrls: ['./create-ticket-form.component.scss']
})
export class CreateTicketFormComponent implements OnInit {
  ticket: TicketForm = ticket;

  constructor(private formService: FormService) { }

  ngOnInit() {}

  onSubmittedForm(values) {
    console.log(values);
  }

}
