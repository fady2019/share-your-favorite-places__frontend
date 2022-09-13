import { IonCardContent } from '@ionic/react';
import React from 'react';

import UserPersonalInfo from './UserPersonalInfo';
import UserAccountInfo from './UserAccountInfo';

const UserSettingContent: React.FC<any> = () => {
    return (
        <IonCardContent>
            <UserPersonalInfo />
            <UserAccountInfo />
        </IonCardContent>
    );
};

export default UserSettingContent;
