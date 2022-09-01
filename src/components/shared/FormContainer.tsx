import React from 'react';

import { IonCol, IonGrid, IonRow } from '@ionic/react';

const FormContainer: React.FC<any> = (props) => {
    return (
        <IonGrid>
            <IonRow>
                <IonCol sizeSm="8" offsetSm="2" sizeMd="6" offsetMd="3" sizeLg="5" offsetLg="3.5">
                    { props.children }
                </IonCol>
            </IonRow>
        </IonGrid>
    );
};

export default FormContainer;
