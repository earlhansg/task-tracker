export interface Credentials {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    position: string;
}

export interface ProfilePicture {
    caption: string;
    url: string;
}

export class User {
    id?: number;
    username?: string;
    password?: string;
    firstName?: string;
    lastName?: string;
    position?: string;
    profilePicture?: ProfilePicture;
}

export type UserProfile = Credentials & ProfilePicture;
