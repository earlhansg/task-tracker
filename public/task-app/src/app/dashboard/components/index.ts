import { ColumnComponent } from './column/column.component';
import { CreateTicketFormComponent } from './create-ticket-form/create-ticket-form.component';
import { DueNotificationComponent } from './due-notification/due-notification.component';
import { TicketComponent } from './ticket/ticket.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const components: any[] = [
    ColumnComponent,
    CreateTicketFormComponent,
    DueNotificationComponent,
    TicketComponent,
    TopNavigationComponent,
    UserProfileComponent,
    NotFoundComponent
];

export * from './column/column.component';
export * from './create-ticket-form/create-ticket-form.component';
export * from './due-notification/due-notification.component';
export * from './ticket/ticket.component';
export * from './top-navigation/top-navigation.component';
export * from './user-profile/user-profile.component';
export * from './not-found/not-found.component';
