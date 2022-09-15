export interface UserInfoI {
    id: string;
    name: string;
    email: string;
    imgURL: string;
    createdAt: string;
    [key: string]: any;
}

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