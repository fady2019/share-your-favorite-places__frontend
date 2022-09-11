import React from 'react';

import { IonCol, IonLabel, IonRow } from '@ionic/react';

import CardItem from './CardItem';

const MiniCardItem: React.FC<any> = (props) => {
    return (
        <IonRow>
            <IonCol sizeMd="6" offsetMd="3" sizeLg="4" offsetLg="4">
                <CardItem>
                    <IonLabel className="ion-text-center">
                        { props.children }
                    </IonLabel>
                </CardItem>
            </IonCol>
        </IonRow>
    );
};

export default MiniCardItem;
