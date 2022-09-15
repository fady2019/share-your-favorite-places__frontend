import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import useHttp from '../../hooks/http-hook';

import { AppStoreI } from '../../interfaces/store';
import { PLaceI } from '../../interfaces/places';

import PlacesContainer from '../../components/places/PlacesContainer';
import { useSelector } from 'react-redux';

const UserPlaces: React.FC<any> = () => {
    const { request, response } = useHttp();

    const isLoading = useSelector((state: AppStoreI) => state.ui.appLoading.isOpen);

    const [places, setPlaces] = useState<PLaceI[]>([]);
    const { userId } = useParams<{ userId: string }>();

    const backendURL = process.env.REACT_APP_BACKEND_URL;

    useEffect(() => {
        if (response) {
            setPlaces(response.places);
        }
    }, [response]);

    useEffect(() => {
        const reqURL = `${backendURL}/places/user/${userId}`;
        request(reqURL);
    }, [request, backendURL, userId]);

    return <>{!isLoading && <PlacesContainer places={places} />}</>;
};

export default UserPlaces;
