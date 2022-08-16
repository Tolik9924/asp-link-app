import React from 'react';

import style from './logo.module.css';

const Logo = () => {
    return (
        <div className={style.logo}>
            <svg>
                <path id="p1" 
                      d="M -18 40 C 10 20, 10 17, 70 1" 
                      stroke="#F0B80D" 
                      fill="transparent" 
                      stroke-width="4" />
            </svg>
            <div className={style.text}>
                <p>asd.link®</p>
            </div>
        </div>
    );
}

export default Logo;
