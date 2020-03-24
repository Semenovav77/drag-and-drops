import React from 'react';
import PropTypes from 'prop-types';

import './Card.scss';

const Card = ({children}) => {
    return (
        <div className={'card'}>
            {children}
        </div>
    );
};

Card.propTypes = {
    text: PropTypes.string
};

export default Card;