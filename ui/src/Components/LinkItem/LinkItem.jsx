import React from 'react';
import Button from '../Button/Button';

import style from './linkItem.module.css';

const LinkItem = ({
    linkName,
    copyText,
    urlCode
}) => {

    return (
        <div className={style.container}>
            <Button theme='link' onClick={() => copyText(linkName)}>
                <p>asd.link/{urlCode}</p>
            </Button>
        </div>
    );
}

export default LinkItem;
