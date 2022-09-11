import React from 'react';

import { IonItemDivider, IonItemGroup, IonLabel, IonList } from '@ionic/react';

import SlidingItem from './SlidingItem';

import classes from './SlidingItemGroup.module.css';

const SlidingItemGroup: React.FC<any> = (props) => {
    const { items, title } = props;

    return (
        <IonItemGroup>
            <IonItemDivider>
                <IonLabel className={classes['dra-sliding-item-group__title']}>{title}</IonLabel>
            </IonItemDivider>

            <IonList>
                {items.map((item: any) => (
                    <SlidingItem key={item.id} item={item} />
                ))}
            </IonList>
        </IonItemGroup>
    );
};

export default SlidingItemGroup;
