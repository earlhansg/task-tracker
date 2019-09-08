import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormlyFieldConfig } from '@ngx-formly/core';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  form: FormGroup = new FormGroup({});
  model = {};

  @Input() buttonLabel: string;
  @Input() fields: FormlyFieldConfig[];
  @Output() submitted: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  submitForm(formValues: any): void {
    this.submitted.next(formValues);
  }


}
