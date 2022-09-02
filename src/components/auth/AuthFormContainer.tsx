import React, { useState } from 'react';

import { IonText } from '@ionic/react';

import { AuthFormContainerI, AuthModeE } from '../../interfaces/auth';

import FormContainer from '../shared/FormContainer';
import AuthForm from './AuthForm';

const AuthFormContainer: React.FC<AuthFormContainerI> = (props) => {
    const [authMode, setAuthMode] = useState<AuthModeE>(AuthModeE.LOGIN);

    const switchAuthModeHandler = () => {
        setAuthMode((prev) => {
            return prev === AuthModeE.LOGIN ? AuthModeE.SIGN_UP : AuthModeE.LOGIN;
        });
    };

    return (
        <FormContainer>
            <IonText>
                <h2>{authMode === AuthModeE.LOGIN ? 'Login' : 'Sign Up'}</h2>
            </IonText>
            
            <AuthForm mode={authMode} onSwitchMode={switchAuthModeHandler} />
        </FormContainer>
    );
};

export default AuthFormContainer;
