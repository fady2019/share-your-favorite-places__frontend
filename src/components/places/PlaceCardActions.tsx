import React from 'react';
import { useSelector } from 'react-redux';

import { trashBin, location, pencil } from 'ionicons/icons';

import { AppStoreI } from '../../interfaces/store';

import CardActions from '../ui/card/CardActions';
import CardActionBtn from '../ui/card/CardActionBtn';

import classes from './PlaceCardActions.module.css';

const PlaceCardActions: React.FC<any> = (props) => {
    const userId = useSelector((state: AppStoreI) => state.user.userInfo?.id);

    return (
        <CardActions>
            <CardActionBtn
                className={classes['dra-card-actions__btn--location']}
                color="dark"
                label="Location"
                icon={location}
                onClick={props.onOpenPlaceMapModal}
            />

            {props.creator === userId && <CardActionBtn
                className={classes['dra-card-actions__btn--edit']}
                color="warning"
                label="Edit"
                icon={pencil}
                onClick={props.onEditPlace}
            />}

            {props.creator === userId && <CardActionBtn
                className={classes['dra-card-actions__btn--delete']}
                color="danger"
                label="Delete"
                icon={trashBin}
                onClick={props.onOpenPlaceDeletionAlert}
            />}
        </CardActions>
    );
};

export default PlaceCardActions;
