export interface UserI {
    id: string;
    name: string;
    imgURL: string;
    placeCount: number;
}

export interface UserItemI {
    userInfo: UserI
}

export interface UserListI {
    users: UserI[];
}

export interface UsersContainerI{
    users: UserI[];
}