import React from 'react';

import classes from './ImageModalContent.module.css';

const ImageModalContent: React.FC<any> = (props) => {
    return (
        <div className={classes['dra-image-modal-content']}>
            <img className={classes['img']} src={props.image} alt={props.alt} />
        </div>
    );
};

export default ImageModalContent;
