import React from 'react';

import Button from '../Button/Button';

import style from './longLinkItem.module.css';

const LongLinkItem = ({
    url,
    copyText
}) => {

    return (
        <div className={style.container}>
            <Button theme='link' onClick={() => copyText(url)}>
                <p>{url}</p>
            </Button>
        </div>
    );
}

export default LongLinkItem;
