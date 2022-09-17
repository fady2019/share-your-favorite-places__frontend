import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import UsersContainer from '../../components/users/UsersContainer';
import useHttp from '../../hooks/http-hook';
import { AppStoreI } from '../../interfaces/store';
import { UserI } from '../../interfaces/users';

const Users: React.FC = () => {
    const { request, response } = useHttp();
    const isLoading = useSelector((state: AppStoreI) => state.ui.appLoading.isOpen);
    const [users, setUsers] = useState<UserI[]>([]);

    const showUsersContainer = !!response && !isLoading;

    const backendURL = process.env.REACT_APP_BACKEND_URL;

    useEffect(() => {
        if (response) {
            setUsers(response.users);
        }
    }, [response, setUsers]);

    useEffect(() => {
        const reqURL = `${backendURL}/users`;
        request(reqURL);
    }, [request, backendURL]);

    return <>{showUsersContainer && <UsersContainer users={users} />}</>;
};

export default Users;
