export interface Credentials {
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    position: string;
}

export interface ProfilePicture {
    caption: string;
    url: string;
}


export type UserProfile = Credentials & ProfilePicture;
