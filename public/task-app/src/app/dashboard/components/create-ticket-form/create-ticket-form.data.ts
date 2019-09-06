import { FormlyFieldConfig } from '@ngx-formly/core';

import { ticketFormFields } from '@app/shared/data/ticket-form.data';


/* TAB */
// tslint:disable-next-line:interface-over-type-literal
export type TicketForm = { buttonLabel: string, fields: FormlyFieldConfig[] };

export const ticket: TicketForm = { buttonLabel: 'Create', fields: ticketFormFields };
