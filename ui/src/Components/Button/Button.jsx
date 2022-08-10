import classNames from 'classnames';
import React from 'react';

import style from './button.module.css';

const Button = ({
    children = '',
    disabled = false,
    size = 'medium',
    type = 'button',
    theme = 'primary',
    className = '',
    onClick,
    fullwidth = false
}) => {

    const classButton = classNames(style.button, style[theme], style[size], {
        [style.fullwidth]: fullwidth
    });

    return(
        <button className={classButton} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
}

export default Button;
