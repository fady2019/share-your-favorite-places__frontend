import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IonLoading } from '@ionic/react';

import { AppStoreI } from '../../../interfaces/store';
import { uiActions } from '../../../store/slices/ui/ui-slice';

import classes from './Loading.module.css';

const AppLoading: React.FC<any> = () => {
    const { isOpen, message } = useSelector((state: AppStoreI) => state.ui.appLoading);
    const dispatch = useDispatch();

    const closeLoadingHandler = () => {
        dispatch(uiActions.closeAppLoading());
    };

    return (
        <IonLoading
            isOpen={isOpen}
            spinner={'crescent'}
            cssClass={classes['dra-app-loading']}
            message={message}
            onWillDismiss={closeLoadingHandler}
        />
    );
};

export default AppLoading;
