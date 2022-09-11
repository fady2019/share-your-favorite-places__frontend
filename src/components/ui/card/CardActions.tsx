import React from 'react';

import classes from './CardActions.module.css';

const CardActions: React.FC<any> = (props) => {
    return (
        <div className={classes['dra-card-actions']}>
            <div className={classes['dra-card-actions__buttons']}>
                { props.children }
            </div>
        </div>
    );
};

export default CardActions;
