import React, { Fragment } from 'react';

import { IonLabel } from '@ionic/react';

import classes from './InputLabel.module.css';

const getAttributes = (props: any) => {
    const attributes = { ...props };

    delete attributes?.label;
    delete attributes?.className;
    delete attributes?.isInvalid;
    delete attributes?.stacked;
    delete attributes?.color;
    delete attributes?.position;

    return attributes;
};

const InputLabel: React.FC<any> = (props) => {
    const labelClasses = `${classes['dra-input-label']} ${props.className}`;
    const isInvalid = props.isInvalid;
    const isInputLabelStacked = props.stacked;

    const labelAttributes = getAttributes(props);

    return (
        <Fragment>
            {props.label && (
                <IonLabel
                    className={labelClasses}
                    color={isInvalid ? 'danger' : isInputLabelStacked ? 'light' : 'medium'}
                    position={isInvalid || isInputLabelStacked ? 'stacked' : 'floating'}
                    {...labelAttributes}
                >
                    {props.label}
                </IonLabel>
            )}
        </Fragment>
    );
};

export default InputLabel;
