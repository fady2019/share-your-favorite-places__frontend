import React from 'react';

import { IonCard } from '@ionic/react';

import classes from './Card.module.css';

const Card: React.FC<any> = (props) => {
    return <IonCard className={classes['dra-card']}>{props.children}</IonCard>;
};

export default Card;
