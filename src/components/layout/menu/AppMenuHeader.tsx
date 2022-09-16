import React from 'react';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { IonAvatar, IonHeader, IonTitle, IonToolbar } from '@ionic/react';

import { AppStoreI } from '../../../interfaces/store';
import classes from './AppMenuHeader.module.css';

import defImg from '../../../assets/icons/default-avatar.svg';

const AppMenuHeader: React.FC<any> = (props) => {
    const authToken = useSelector((state: AppStoreI) => state.auth.token);
    const username = useSelector((state: AppStoreI) => state.user.userInfo?.name);
    const imgURL = useSelector((state: AppStoreI) => state.user.userInfo?.imgURL) || defImg;

    const isAuth = !!authToken && !!authToken.id;

    const { onCloseMenu } = props;

    return (
        <IonHeader>
            <IonToolbar color="warning">
                <Link
                    className={classes['dra-app-menu__header-link']}
                    to={isAuth ? '/user/setting' : '/auth'}
                    onClick={onCloseMenu}
                >
                    <IonTitle className="ion-text-start">{isAuth ? username : 'Join Us'}</IonTitle>

                    <IonAvatar className={classes['dra-app-menu__user-avatar']} slot="start">
                        <img src={imgURL} alt="user-avatar" />
                    </IonAvatar>
                </Link>
            </IonToolbar>
        </IonHeader>
    );
};

export default AppMenuHeader;
