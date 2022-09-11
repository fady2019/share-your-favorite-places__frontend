import React from 'react';

import { trashBin, location, pencil } from 'ionicons/icons';

import CardActions from '../ui/card/CardActions';
import CardActionBtn from '../ui/card/CardActionBtn';

import classes from './PlaceCardActions.module.css';

const PlaceCardActions: React.FC<any> = (props) => {
    return (
        <CardActions>
            <CardActionBtn
                className={classes['dra-card-actions__btn--location']}
                color="dark"
                label="Location"
                icon={location}
                onClick={props.onOpenPlaceMapModal}
            />

            <CardActionBtn
                className={classes['dra-card-actions__btn--edit']}
                color="warning"
                label="Edit"
                icon={pencil}
                onClick={props.onEditPlace}
            />

            <CardActionBtn
                className={classes['dra-card-actions__btn--delete']}
                color="danger"
                label="Delete"
                icon={trashBin}
                onClick={props.onOpenPlaceDeletionAlert}
            />
        </CardActions>
    );
};

export default PlaceCardActions;
