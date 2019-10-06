import { TicketsGuard } from './tickets.guard';
import { UsersGuard } from './users.guard';

export const guards: any[] = [ TicketsGuard, UsersGuard ];

export * from './tickets.guard';
export * from './users.guard';
