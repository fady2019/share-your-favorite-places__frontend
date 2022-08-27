import React from 'react';

import { IonCol, IonLabel, IonRow } from '@ionic/react';

import DraCard from './DraCard';

const DraMiniCard: React.FC<any> = (props) => {
    return (
        <IonRow>
            <IonCol sizeMd="6" offsetMd="3" sizeLg="4" offsetLg="4">
                <DraCard>
                    <IonLabel className="ion-text-center">
                        { props.children }
                    </IonLabel>
                </DraCard>
            </IonCol>
        </IonRow>
    );
};

export default DraMiniCard;
