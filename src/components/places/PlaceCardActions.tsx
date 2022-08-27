import React from 'react';

import { trashBin, location, pencil } from 'ionicons/icons';

import classes from './PlaceCardActions.module.css';
import PlaceCardActionBtn from './PlaceCardActionBtn';

const PlaceCardActions: React.FC<any> = () => {
    return (
        <div className={classes['dra-card-actions']}>
            <div className={classes['dra-card-actions__buttons']}>
                <PlaceCardActionBtn className={classes['dra-card-actions__btn--location']} color="dark" label="Location" icon={location} />

                <PlaceCardActionBtn className={classes['dra-card-actions__btn--edit']} color="warning" label="Edit" icon={pencil} />
                
                <PlaceCardActionBtn className={classes['dra-card-actions__btn--delete']} color="danger" label="Delete" icon={trashBin} />
            </div>
        </div>
    );
};

export default PlaceCardActions;
