import React from 'react';

import style from './namePage.module.css';

const NamePage = ({
    name
}) => {
    return(
        <div className={style.container}>
            <p>Get the <span className={style.short}>{name}</span> link as you go<span>&#128075;</span></p>
        </div>
    );
}

export default NamePage;
