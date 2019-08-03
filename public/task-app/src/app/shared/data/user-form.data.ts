import { FormlyFieldConfig } from '@ngx-formly/core';


/* SIGN IN FORM FIELDS */
export const signInFormFields: FormlyFieldConfig[] = [
  {
    key: 'username',
    type: 'input',
    templateOptions: {
      placeholder: 'Username',
      required: true,
    }
  },
  {
    key: 'password',
    type: 'input',
    templateOptions: {
      type: 'password',
      placeholder: 'Password',
      required: true,
    }
  }
];

/* SIGN UP FORM FIELDS */
export const signUpFormFields: FormlyFieldConfig[] = [
  {
    key: 'username',
    type: 'input',
    templateOptions: {
      placeholder: 'Username',
      required: true,
    }
  },
  {
    key: 'password',
    type: 'input',
    templateOptions: {
      type: 'password',
      placeholder: 'Password',
      required: true,
    }
  },
  {
    key: 'confirmPassword',
    type: 'input',
    templateOptions: {
      type: 'password',
      placeholder: 'Confirm Password',
      required: true,
    }
  }
];
