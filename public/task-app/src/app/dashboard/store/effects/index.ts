import { TicketsEffects } from './tickets.effect';
import { UsersEffects } from './users.effect';
import { AuthEffects } from './auth.effect';

export const effects: any[] = [ TicketsEffects, UsersEffects, AuthEffects ];

export * from './tickets.effect';
export * from './users.effect';
export * from './auth.effect';
