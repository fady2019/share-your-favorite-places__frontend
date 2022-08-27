import React from 'react';

import UserList from '../../components/users/UserList';

import { UserItemI } from '../../interfaces/components/users';

const DUMMY_USERS: UserItemI[] = [
    { id: 'user1', name: 'Fady Emad', imgURL: 'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', placeCount: 5 },
    { id: 'user10', name: 'Fady Emad', imgURL: 'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', placeCount: 5 },
    { id: 'user100', name: 'Fady Emad', imgURL: 'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', placeCount: 5 },
    { id: 'user1000', name: 'Fady Emad', imgURL: 'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', placeCount: 5 },
    { id: 'user10000', name: 'Fady Emad', imgURL: 'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', placeCount: 5 },
    { id: 'user100000', name: 'Fady Emad', imgURL: 'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', placeCount: 5 },
    { id: 'user1000000', name: 'Fady Emad', imgURL: 'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', placeCount: 5 },
    { id: 'user10000000', name: 'Fady Emad', imgURL: 'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', placeCount: 5 },
    { id: 'user100000000', name: 'Fady Emad', imgURL: 'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', placeCount: 5 },
    { id: 'user1000000000', name: 'Fady Emad', imgURL: 'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', placeCount: 5 },
    { id: 'user10000000000', name: 'Fady Emad', imgURL: 'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', placeCount: 5 },
];

const Users: React.FC = () => {
    return <UserList users={DUMMY_USERS}></UserList>;
};

export default Users;
