import React from 'react';

import UsersContainer from '../../components/users/UsersContainer';

import { DUMMY_USERS } from './dummy-users';

const Users: React.FC = () => {
    return <UsersContainer users={DUMMY_USERS} />;
};

export default Users;
