import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  form = new FormGroup({});
  model = { email: 'email@gmail.com' };
  fields: FormlyFieldConfig[] = [{
    key: 'email',
    type: 'input',
    templateOptions: {
      label: 'Email address',
      placeholder: 'Enter email',
      required: true,
    }
  }];

  ngOnInit() {}

  submit(model) {
    console.log(model);
  }
}
