import React from 'react';

import UsersContainer from '../../components/users/UsersContainer';

import { UserI } from '../../interfaces/users';

const DUMMY_USERS: UserI[] = [
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
    return <UsersContainer users={DUMMY_USERS} />;
};

export default Users;
