import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({children, sendCard, value, panelIndex}) => {
    return (
        <button className='button' onClick={() => sendCard(value, panelIndex)}>
            {children}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired
};

export default Button;