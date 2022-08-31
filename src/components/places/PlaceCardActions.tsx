import React from 'react';

import { useHistory } from 'react-router-dom';

import { trashBin, location, pencil } from 'ionicons/icons';

import PlaceCardActionBtn from './PlaceCardActionBtn';

import classes from './PlaceCardActions.module.css';

const PlaceCardActions: React.FC<any> = (props) => {
    const history = useHistory();

    const editPlaceHandler = () => {
        history.push('/places/' + props.placeId);
    };

    return (
        <div className={classes['dra-card-actions']}>
            <div className={classes['dra-card-actions__buttons']}>
                <PlaceCardActionBtn
                    className={classes['dra-card-actions__btn--location']}
                    color="dark"
                    label="Location"
                    icon={location}
                    onClick={props.onOpenMapModal}
                />

                <PlaceCardActionBtn
                    className={classes['dra-card-actions__btn--edit']}
                    color="warning"
                    label="Edit"
                    icon={pencil}
                    onClick={editPlaceHandler}
                />

                <PlaceCardActionBtn
                    className={classes['dra-card-actions__btn--delete']}
                    color="danger"
                    label="Delete"
                    icon={trashBin}
                    onClick={props.onOpenDeletePlaceAlert}
                />
            </div>
        </div>
    );
};

export default PlaceCardActions;
