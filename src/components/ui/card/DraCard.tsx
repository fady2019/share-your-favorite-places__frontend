import React from 'react';

import { IonItem } from '@ionic/react';

import classes from './DraCard.module.css';

const DraCard: React.FC<any> = (props) => {
    const extraAttributes = {
        ...props,
        className: undefined,
        children: undefined,
    };

    const cardClasses = `${classes['card']} ${props.className}`;

    return (
        <IonItem {...extraAttributes} className={cardClasses} color="light" lines="full">
            {props.children}
        </IonItem>
    );
};

export default DraCard;
