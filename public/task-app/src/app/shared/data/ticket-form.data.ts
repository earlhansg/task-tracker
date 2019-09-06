import { FormlyFieldConfig } from '@ngx-formly/core';


/* TICKET FORM FIELDS */
export const ticketFormFields: FormlyFieldConfig[] = [
  {
    key: 'ticketName',
    type: 'input',
    templateOptions: {
      placeholder: 'Ticket Name',
      required: true,
    }
  },
  {
    key: 'ticketType',
    type: 'select',
    templateOptions: {
        label: 'Select type',
        options: [
            { label: 'UI', value: 'Design' },
            { label: 'Feature', value: 'Feature' },
            { label: 'Backend', value: 'Backend' },
            { label: 'Functionality', value: 'Functionality' },
            { label: 'Bug', value: 'Bug' },
        ],
    }
  },
  {
    key: 'ticketDescription',
    type: 'textarea',
    templateOptions: {
      placeholder: 'Add description ...',
      required: true,
    }
  }
];
