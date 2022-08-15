import React from 'react';

import style from './itemOfPage.module.css';

const ItemOfPage = ({
    children
}) => {
    return(
        <p className={style.item}>{children}</p>
    );
}

export default ItemOfPage;
