import React from 'react';

import { IonButton, IonIcon, IonLabel } from '@ionic/react';

import classes from './CardActionBtn.module.css';

const CardActionBtn: React.FC<any> = (props) => {
    const btnCLasses = `${classes['dra-card-actions__btn']} ${props.className}`;

    return (
        <IonButton
            className={btnCLasses}
            color={props.color}
            fill="solid"
            size="small"
            onClick={props.onClick}
        >
            <IonLabel>{props.label}</IonLabel>
            <IonIcon slot="start" icon={props.icon} />
        </IonButton>
    );
};

export default CardActionBtn;
