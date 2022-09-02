import React from 'react';
import { useHistory } from 'react-router';

import { IonButton } from '@ionic/react';

import classes from './Page404.module.css';

const Page404: React.FC<any> = () => {
    const history = useHistory();

    const goToHomePageHandler = () => {
        history.replace('/');
    };

    return (
        <div className={classes['dra-page-404']}>
            <h1 className={classes['dra-page-404__title']}>oops!</h1>

            <h2 className={classes['dra-page-404__subtitle']}>404 - page not found</h2>

            <p className={classes['dra-page-404__paragraph']}>
                It seems that the page you're looking for doesn't exit!
            </p>

            <IonButton
                className={classes['dra-page-404__home-btn']}
                strong
                color="warning"
                onClick={goToHomePageHandler}
            >
                GO TO HOMEPAGE
            </IonButton>
        </div>
    );
};

export default Page404;
