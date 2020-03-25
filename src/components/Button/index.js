import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({children, sendObj, value, panelIndex}) => {
    return (
        <button className='button' onClick={() => sendObj(value, panelIndex)}>
            {children}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired
};

export default Button;