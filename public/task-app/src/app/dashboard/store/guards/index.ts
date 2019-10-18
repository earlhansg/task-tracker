import { TicketsGuard } from './tickets.guard';
import { UsersGuard } from './users.guard';
import { AuthenticatedGuard } from './authentication.guard';

export const guards: any[] = [ TicketsGuard, UsersGuard, AuthenticatedGuard ];

export * from './tickets.guard';
export * from './users.guard';
export * from './authentication.guard';
