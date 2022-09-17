import React from 'react';

import { IonFooter, IonIcon, IonText, IonToolbar } from '@ionic/react';
import { heart } from 'ionicons/icons';

import classes from './AppMenuFooter.module.css'

const AppMenuFooter: React.FC<any> = () => {
    const portfolioURL = 'http://fady-emad-portfolio.web.app/';

    return (
        <IonFooter>
            <IonToolbar className={classes['dra-menu-footer__toolbar']} color="dark">
                <IonText className={classes['dra-menu-footer__paragraph']}>
                    <IonText>Made with</IonText> <IonIcon icon={heart} color="warning" />{' '}
                    <IonText>
                        by{' '}
                        <a href={portfolioURL} target="_blank">
                            Fady Emad
                        </a>
                    </IonText>
                </IonText>
            </IonToolbar>
        </IonFooter>
    );
};

export default AppMenuFooter;
