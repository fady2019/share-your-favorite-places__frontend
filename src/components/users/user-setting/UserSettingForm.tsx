import React from 'react';

import { IonButton, IonCol, IonGrid, IonRow } from '@ionic/react';

import FormActions from '../../shared/FormActions';

const UserSettingForm: React.FC<any> = (props) => {
    return (
        <IonGrid>
            <IonRow>
                <IonCol sizeSm="7" offsetSm="2.5" sizeMd="8" offsetMd="2">
                    <form onSubmit={props.onSubmit}>
                        {props.children}

                        <FormActions>
                            <IonButton
                                className="dra-form-actions__btn"
                                color="warning"
                                strong
                                type="submit"
                                disabled={props.disabled}
                            >
                                { props.btnLabel || 'Change' }
                            </IonButton>
                        </FormActions>
                    </form>
                </IonCol>
            </IonRow>
        </IonGrid>
    );
};

export default UserSettingForm;
