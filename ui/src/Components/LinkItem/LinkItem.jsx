import React from 'react';

import style from './linkItem.module.css';

const LinkItem = ({
    linkName,
    copyText,
    urlCode
}) => {

    return (
        <div onClick={() => copyText(linkName)} 
             className={style.container}>
            <p>asd.link/{urlCode}</p>
        </div>
    );
}

export default LinkItem;
