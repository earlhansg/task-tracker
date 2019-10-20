import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormlyFieldConfig } from '@ngx-formly/core';
/* Interface from dashboard */
import { Ticket } from '@app/dashboard/models';
/* Interface from shared */
import { Credentials } from '@app/shared/models';
/* icons */
import { faArrowDown, faCog } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  form: FormGroup = new FormGroup({});
  model = {};
  faCog = faCog;

  @Input() buttonLabel: string;
  @Input() fields: FormlyFieldConfig[];
  @Input() isLoading?: Observable<boolean>;
  @Output() submitted: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  submitForm(formValues: Ticket | Credentials): void {
    this.submitted.next(formValues);
    this.form.reset();
  }


}
