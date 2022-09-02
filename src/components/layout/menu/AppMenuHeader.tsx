import React from 'react';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { IonAvatar, IonHeader, IonTitle, IonToolbar } from '@ionic/react';

import { AppStoreI } from '../../../interfaces/store';
import classes from './AppMenuHeader.module.css';

import defaultAvatar from '../../../assets/icons/default-avatar.svg';

const DUMMY_USER_IMAGE =
    'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
const DUMMY_USER_NAME = 'Fady Emad';

const AppMenuHeader: React.FC<any> = (props) => {
    const isAuth = useSelector((state: AppStoreI) => state.auth.isAuth);

    const { onCloseMenu } = props;

    return (
        <IonHeader>
            <IonToolbar color="warning">
                <Link
                    className={classes['dra-app-menu__header-link']}
                    to="/auth"
                    onClick={onCloseMenu}
                >
                    <IonTitle className="ion-text-start">
                        {isAuth ? DUMMY_USER_NAME : 'Join Us'}
                    </IonTitle>

                    <IonAvatar className={classes['dra-app-menu__user-avatar']} slot="start">
                        <img src={isAuth ? DUMMY_USER_IMAGE : defaultAvatar} alt="user-avatar" />
                    </IonAvatar>
                </Link>
            </IonToolbar>
        </IonHeader>
    );
};

export default AppMenuHeader;
