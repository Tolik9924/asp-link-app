import React from 'react';

import classNames from 'classnames';

import style from './input.module.css';

const Input = ({
    name = '',
    type = 'text',
    disabled = false,
    value,
    handleChange,
    size = 'medium',
    placeholder = '',
    theme = 'primary',
}) => {

    const classProps = classNames(style.input, style[`${size}Input`], style[`${theme}Input`]);

    return (
        <input className={classProps}
            placeholder={placeholder}
            type={type}
            name={name}
            disabled={disabled}
            onChange={handleChange}
            value={value} />
    );
}

export default Input;
