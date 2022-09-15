import React from 'react';
import { useSelector } from 'react-redux';

import { IonText } from '@ionic/react';

import { AppStoreI } from '../../interfaces/store';
import { AuthModeE } from '../../interfaces/auth';

import FormContainer from '../shared/FormContainer';
import AuthForm from './AuthForm';

const AuthFormContainer: React.FC<any> = () => {
    const authMode = useSelector((state: AppStoreI) => state.auth.authMode);

    return (
        <FormContainer>
            <IonText>
                <h2>{authMode === AuthModeE.LOGIN ? 'Login' : 'Sign Up'}</h2>
            </IonText>

            <AuthForm mode={authMode} />
        </FormContainer>
    );
};

export default AuthFormContainer;
