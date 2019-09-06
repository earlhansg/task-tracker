import { FormlyFieldConfig } from '@ngx-formly/core';

import { ticketFormFields } from '@app/shared/data/ticket-form.data';


/* TAB */
// tslint:disable-next-line:interface-over-type-literal
export type TicketForm = { label: string; buttonLabel: string, fields: FormlyFieldConfig[] };

export const ticket: TicketForm = { label: 'Create ticket', buttonLabel: 'Log In', fields: ticketFormFields };
