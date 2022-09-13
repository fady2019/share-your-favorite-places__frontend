import React, { useRef } from 'react';

import { IonAvatar } from '@ionic/react';

import ImagePicker from '../../ui/image-picker/ImagePicker';

import classes from './UserAvatar.module.css';
import defImg from '../../../assets/icons/default-avatar.svg';

const UserAvatar: React.FC<any> = () => {
    const imagePickerRef = useRef<any>(null);

    const pickImgHandler = () => {
        imagePickerRef.current?.click();
    };

    const getInputHandler = (id: string, img: File, isValid: boolean) => {
        console.log(id, img, isValid);
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

            <IonAvatar className={classes['dra-user-avatar-container__avatar']} onClick={pickImgHandler}>
                <img src={defImg} alt="" />
            </IonAvatar>
        </div>
    );
};

export default UserAvatar;
