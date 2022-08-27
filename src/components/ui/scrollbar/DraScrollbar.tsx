import React from 'react';

import classes from './DraScrollbar.module.css';

const DraScrollbar: React.FC<any> = (props) => {
    return <div className={classes['dra-scroll']}>{props.children}</div>;
};

export default DraScrollbar;
