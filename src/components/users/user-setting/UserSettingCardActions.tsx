import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { personRemove, logOut } from 'ionicons/icons';

import { uiActions } from '../../../store/slices/ui/ui-slice';
import { authActions } from '../../../store/slices/auth/auth-slice';

import CardActionBtn from '../../ui/card/CardActionBtn';
import CardActions from '../../ui/card/CardActions';

import classes from './UserSettingCardActions.module.css';
import UserSettingPasswordConfirmationForm from './UserSettingPasswordConfirmationForm';

const UserSettingCardActions: React.FC<any> = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const openAccountDeletionAlertHandler = () => {
        dispatch(
            uiActions.openAppMapModal({
                isOpen: true,
                title: 'Confirm Password',
                content: <UserSettingPasswordConfirmationForm />
            })
        );
    };

    const logoutHandler = () => {
        dispatch(authActions.logout());
        history.replace('/');
    };

    return (
        <CardActions>
            <CardActionBtn
                className={classes['dra-card-actions__btn--delete-account']}
                color="danger"
                label="Delete Account"
                icon={personRemove}
                onClick={openAccountDeletionAlertHandler}
            />

            <CardActionBtn
                className={classes['dra-card-actions__btn--logout']}
                color="warning"
                label="Logout"
                icon={logOut}
                onClick={logoutHandler}
            />
        </CardActions>
    );
};

export default UserSettingCardActions;
