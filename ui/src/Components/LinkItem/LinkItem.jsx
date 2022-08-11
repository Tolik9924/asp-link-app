import React from 'react';

import style from './linkItem.module.css';

const LinkItem = ({
    linkName,
    copyText
}) => {

    return (
        <div onClick={() => copyText(linkName)} 
             className={style.container}>
            <p>{linkName}</p>
        </div>
    );
}

export default LinkItem;
