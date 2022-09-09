import React, { Fragment } from 'react';

import { IonText } from '@ionic/react';

import classes from './InputError.module.css';

const InputError: React.FC<any> = (props) => {
    const errorClasses = `${classes['dra-input-error']} ${props.className}`;

    return (
        <Fragment>
            {props.show && (
                <IonText className={errorClasses} color="danger">
                    <p>{props.error || 'You entered an invalid value!'}</p>
                </IonText>
            )}
        </Fragment>
    );
};

export default InputError;
