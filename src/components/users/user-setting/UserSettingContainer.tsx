import React from 'react';

import { IonCol, IonGrid, IonRow } from '@ionic/react';

import Card from '../../ui/card/Card';
import UserAvatar from './UserAvatar';
import UserSettingContent from './UserSettingContent';
import UserSettingCardActions from './UserSettingCardActions';

const UserSettingContainer: React.FC<any> = () => {
    return (
        <IonGrid>
            <IonRow>
                <IonCol sizeSm='8' offsetSm='2' sizeMd='6.5' offsetMd='2.75' sizeLg="5" offsetLg="3.5">
                    <Card>
                        <UserAvatar />
                        <UserSettingContent />
                        <UserSettingCardActions />
                    </Card>
                </IonCol>
            </IonRow>
        </IonGrid>
    );
};

export default UserSettingContainer;
