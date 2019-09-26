import { FormlyFieldConfig } from '@ngx-formly/core';

import { users } from '@app/shared/data/users-list.data';

const result = users.map(item => {
  return { label: `${item.firstName} ${item.lastName}`, value: item.id };
});

/* TICKET FORM FIELDS */
export const ticketFormFields: FormlyFieldConfig[] = [
  {
    key: 'name',
    type: 'input',
    templateOptions: {
      placeholder: 'Ticket Name',
      required: true,
    }
  },
  {
    key: 'type',
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
        required: true
    },
  },
  {
    key: 'description',
    type: 'textarea',
    templateOptions: {
      placeholder: 'Add description ...',
      required: true,
    }
  },
  {
    key: 'assign',
    type: 'select',
    templateOptions: {
      label: 'Select user ...',
      options: [
        ...result
      ],
      required: true
    }
  }
];
