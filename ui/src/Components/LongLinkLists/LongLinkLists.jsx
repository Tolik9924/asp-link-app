import React from 'react';
import LongLinkItem from '../LongLinkItem/LongLinkItem';

import style from './longLinkLists.module.css';

const LongLinkLists = ({
    links,
    copyText
}) => {

    console.log(links);

    return(
        <div className={style.container}>
            {
                links.map((item) => {
                    return(
                      <LongLinkItem key={item.id}
                                url={item.url}
                                copyText={copyText} />
                    );
                })
            }
        </div>
    );
}

export default LongLinkLists;
