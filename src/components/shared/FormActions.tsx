import React from 'react';

import './FormActions.css';

const FormActions: React.FC<any> = (props) => {
    return <div className="dra-form-actions">{props.children}</div>;
};

export default FormActions;