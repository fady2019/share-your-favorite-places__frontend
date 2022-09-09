import React, { ChangeEvent, Fragment, useEffect, useReducer, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../../store/slices/ui/ui-slice';

import { IonThumbnail, IonItem, IonImg, IonIcon } from '@ionic/react';
import { close } from 'ionicons/icons';

import { ImagePickerActionTypeE } from '../../../interfaces/image-picker';
import { imagePickerInitState, imagePickerReducer } from './image-picker-utilities';

import PickedImageModal from './PickedImageModal';
import InputLabel from '../input-label/InputLabel';
import InputError from '../input-error/InputError';

import classes from './ImagePicker.module.css';

const getAttributes = (props: any) => {
    const attributes = { ...props };

    delete attributes?.className;
    delete attributes?.type;
    delete attributes?.value;
    delete attributes?.valid;
    delete attributes?.onChange;
    delete attributes?.onGetFile;

    return attributes;
};

const ImagePicker: React.FC<any> = (props) => {
    const initialIsValid = props.valid;
    const initialPreviewURL = props.value; // props.value is the src of file

    const dispatch = useDispatch();

    const [imagePickerState, imagePickerDispatch] = useReducer(imagePickerReducer, {
        ...imagePickerInitState,
        valid: initialIsValid,
    });

    const [imgPreviewURL, setImgPreview] = useState<any>('');
    const [inputFileValue, setInputFileValue] = useState<any>('');

    const imagePickerRef = useRef<HTMLInputElement>(null);

    const isInvalid = imagePickerState.touched && !imagePickerState.valid;

    const filePickerClassName = `${classes['dra-image-picker__custom-input']} ${props.className} ${
        isInvalid && classes['dra-image-picker__custom-input--invalid']
    }`;

    const imageFile = imagePickerState.value;
    const fileName = imagePickerState.value?.name || imgPreviewURL;
    const showClearBtn = imgPreviewURL !== initialPreviewURL && imageFile;

    const filePickerAttributes = getAttributes(props);

    const { onGetFile, name: filePickerName, id: filePickerId } = props;
    const { valid: isFileValid } = imagePickerState;

    useEffect(() => {
        if (onGetFile) {
            onGetFile(filePickerName || filePickerId, imageFile, isFileValid);
        }
    }, [onGetFile, filePickerName, filePickerId, imageFile, isFileValid]);

    useEffect(() => {
        if (imageFile) {
            const fileReader = new FileReader();

            fileReader.onload = () => {
                setImgPreview(fileReader.result);
            };

            fileReader.readAsDataURL(imageFile);
        } else {
            setImgPreview(initialPreviewURL);
        }
    }, [imageFile, initialPreviewURL]);

    const openFileExplorerHandler = () => {
        imagePickerDispatch({
            type: ImagePickerActionTypeE.OPEN_WINDOW,
        });

        imagePickerRef.current?.click();
    };

    const pickFileHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;

        if (files && files.length > 0) {
            imagePickerDispatch({
                type: ImagePickerActionTypeE.PICK_IMAGE,
                payload: files[0],
            });
        }
    };

    const clearFileHandler = () => {
        imagePickerDispatch({
            type: ImagePickerActionTypeE.UNPICK_IMAGE,
            payload: initialIsValid,
        });

        setInputFileValue('');
    };

    const openPickedImageModelHandler = () => {
        dispatch(uiActions.openPickedImageModal({ isOpen: true, imgSrc: imgPreviewURL }));
    };

    return (
        <Fragment>
            <PickedImageModal />

            <input
                className={classes['dra-image-picker__main-input']}
                ref={imagePickerRef}
                type="file"
                value={inputFileValue}
                onChange={pickFileHandler}
                {...filePickerAttributes}
            />

            <IonItem className={classes['dra-image-picker']} lines="none">
                {imgPreviewURL && (
                    <IonThumbnail
                        className={classes['dra-image-picker__image-preview']}
                        slot="end"
                        onClick={openPickedImageModelHandler}
                    >
                        <IonImg src={imgPreviewURL} />
                    </IonThumbnail>
                )}

                <InputLabel
                    label={props.label}
                    isInvalid={isInvalid}
                    stacked={!!fileName}
                    onClick={openFileExplorerHandler}
                />

                <div className={filePickerClassName}>
                    <span
                        role={'button'}
                        className={classes['file-name']}
                        tabIndex={0}
                        onClick={openFileExplorerHandler}
                    >
                        {fileName}
                    </span>

                    {showClearBtn && (
                        <span
                            role={'button'}
                            className={classes['clear-btn']}
                            tabIndex={1}
                            onClick={clearFileHandler}
                        >
                            <IonIcon icon={close} size="large" />
                        </span>
                    )}
                </div>

                <InputError show={isInvalid} error={imagePickerState.error} />
            </IonItem>
        </Fragment>
    );
};

export default ImagePicker;
