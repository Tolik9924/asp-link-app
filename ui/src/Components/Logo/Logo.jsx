import React from 'react';

import style from './logo.module.css';

const Logo = () => {
    return (
        <div className={style.logo}>
            <div className={style.svg}>
                <svg width="88" height="33" viewBox="0 0 88 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.12011 30.936C16.8017 22.569 53.9411 5.12202 85.0466 2.27074" stroke="#F0B80D" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
            <div className={style.text}>
                <p>asd.link®</p>
            </div>
        </div>
    );
}

export default Logo;
