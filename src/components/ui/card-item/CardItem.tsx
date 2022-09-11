import React from 'react';

import { IonItem } from '@ionic/react';

import classes from './CardItem.module.css';

const CardItem: React.FC<any> = (props) => {
    const extraAttributes = {
        ...props,
        className: undefined,
        children: undefined,
    };

    const cardClasses = `${classes['dra-card-item']} ${props.className}`;

    return (
        <IonItem {...extraAttributes} className={cardClasses} color="light" lines="full">
            {props.children}
        </IonItem>
    );
};

export default CardItem;
