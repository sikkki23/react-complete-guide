import './Card.css'
import React from 'react';

const Card = (prop) => {
    const classes = 'card ' + prop.className;
    return     <div className={classes}>{prop.children}</div>

}

export default Card;