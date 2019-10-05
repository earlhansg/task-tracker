import * as fromUsers from '../actions/users.action';
import { User } from '@app/dashboard/models';

export interface UserState {
    entities: { [id: number]: User };
    loaded: boolean;
    loading: boolean;
}

export const initialState: UserState = {
    entities: {},
    loaded: false,
    loading: false
};

export function reducer(
 state = initialState,
 action: fromUsers.UsersAction
): UserState {
    switch (action.type) {
        case fromUsers.LOAD_USERS: {
            return {
                ...state,
                loading: true
            };
        }
        case fromUsers.LOAD_USERS_SUCCESS: {
            const users = action.payload;

            const entities = users.reduce(
                // tslint:disable-next-line:no-shadowed-variable
                (entities: { [id: number]: User }, user: User) => {
                    return {
                        ...entities,
                        [user.id]: user
                    };
                },
                {
                    ...state.entities,
                }
            );

            return {
                ...state,
                loading: false,
                loaded: true,
                entities
            };
        }
        case fromUsers.LOAD_USERS_FAIL: {
            return {
              ...state,
              loading: false,
              loaded: false,
            };
        }
    }

    return state;

}

export const getUsersEntities = (state: UserState) => state.entities;
export const getUsersLoading = (state: UserState) => state.entities;
export const getUsersLoaded = (state: UserState) => state.loaded;
