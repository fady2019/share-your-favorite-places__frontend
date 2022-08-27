export interface UserItemI {
    id: string;
    name: string;
    imgURL: string;
    placeCount: number;
}

export interface UserListI {
    users: UserItemI[];
}