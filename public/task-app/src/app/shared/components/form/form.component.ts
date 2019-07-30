import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormlyFieldConfig } from '@ngx-formly/core';

import { Credentials } from '@app/shared/interfaces/credentials.interface';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  form: FormGroup = new FormGroup({});
  model: Credentials = { username: '', password: '' };

  @Input() buttonLabel: string;
  @Input() fields: FormlyFieldConfig[];
  @Output() submitted: EventEmitter<Credentials> = new EventEmitter<Credentials>();

  constructor() {}

  submitForm(credentials: Credentials): void {
    this.submitted.next(credentials);
  }

}
