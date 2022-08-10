import React from 'react';

import style from './namePage.module.css';

const NamePage = () => {
    return(
        <div className={style.container}>
            <p>Get the <span className={style.short}>short</span> link as you go</p>
        </div>
    );
}

export default NamePage;
