import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IonAvatar, IonFab, IonFabButton, IonFabList, IonIcon } from '@ionic/react';
import { addCircle, image, trashBin } from 'ionicons/icons';

import useHttp from '../../../hooks/http-hook';
import { uiActions } from '../../../store/slices/ui/ui-slice';
import { userActions } from '../../../store/slices/user/user-slice';
import { AppStoreI } from '../../../interfaces/store';

import ImagePicker from '../../ui/image-picker/ImagePicker';
import ImageModalContent from '../../shared/image-modal/ImageModalContent';

import classes from './UserAvatar.module.css';
import defImg from '../../../assets/icons/default-avatar.svg';

const UserAvatar: React.FC<any> = () => {
    const dispatch = useDispatch();
    const username = useSelector((state: AppStoreI) => state.user.userInfo?.name) || 'user';
    const imgURL = useSelector((state: AppStoreI) => state.user.userInfo?.imgURL) || defImg;
    const token = useSelector((state: AppStoreI) => state.auth.token);

    const { request, response } = useHttp();

    const imagePickerRef = useRef<any>(null);

    const showAvatarClearBtn = imgURL !== defImg;

    const backendURL = process.env.REACT_APP_BACKEND_URL;

    useEffect(() => {
        return () => {
            dispatch(uiActions.closeAppModal());
        };
    }, [dispatch]);

    useEffect(() => {
        if (!response) {
            return;
        }

        dispatch(userActions.setUserInfo(response.user));
    }, [dispatch, response]);

    const pickImgHandler = () => {
        imagePickerRef.current?.click();
    };

    const resetImgHandler = () => {
        const reqURL = `${backendURL}/users/reset/avatar/`;

        request(reqURL, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${token?.id}`,
            },
        });
    };

    const getInputHandler = useCallback(
        (id: string, img: File, isValid: boolean) => {
            if (isValid && img) {
                const reqURL = `${backendURL}/users/change/avatar`;

                const reqBody = new FormData();
                reqBody.append('image', img);

                request(reqURL, {
                    method: 'PATCH',
                    headers: {
                        authorization: `Bearer ${token?.id}`,
                    },
                    body: reqBody,
                });
            }
        },
        [request, backendURL, token]
    );

    const openAvatarModalHandler = () => {
        dispatch(
            uiActions.openAppModal({
                isOpen: true,
                title: username + "'s avatar",
                content: <ImageModalContent image={imgURL} />,
            })
        );
    };

    return (
        <div className={classes['dra-user-avatar-container']}>
            <ImagePicker
                ref={imagePickerRef}
                id="image"
                name="image"
                accept="image/png, image/jpeg, image/jpg"
                hidden={true}
                multiple={false}
                onGetFile={getInputHandler}
            />

            <IonFab
                className={classes['dra-user-avatar-container__action-buttons']}
                vertical="top"
                horizontal="start"
                slot="fixed"
            >
                <IonFabButton color={'warning'} size="small">
                    <IonIcon icon={image} size="small" />
                </IonFabButton>
                <IonFabList className={classes['dra-user-avatar-container__fab-list']} side="end">
                    <IonFabButton color={'dark'} title="new image" onClick={pickImgHandler}>
                        <IonIcon icon={addCircle} />
                    </IonFabButton>
                </IonFabList>
                {showAvatarClearBtn && (
                    <IonFabList className={classes['dra-user-avatar-container__fab-list']} side="bottom">
                        <IonFabButton color={'dark'} title="clear image" onClick={resetImgHandler}>
                            <IonIcon icon={trashBin} />
                        </IonFabButton>
                    </IonFabList>
                )}
            </IonFab>

            <IonAvatar
                className={classes['dra-user-avatar-container__avatar']}
                onClick={openAvatarModalHandler}
            >
                <img src={imgURL} alt={username} />
            </IonAvatar>
        </div>
    );
};

export default UserAvatar;
