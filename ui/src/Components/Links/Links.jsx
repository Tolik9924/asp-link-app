import React from 'react';
import LinkItem from '../LinkItem/LinkItem';

import style from './links.module.css';

const Links = ({
    links,
    copyText
}) => {

    console.log(links);

    return(
        <div className={style.container}>
            {
                links.map((item) => {
                    return(
                      <LinkItem key={item.id}
                                linkName={item.linkName}
                                linkId={item.id}
                                copyText={copyText}
                                urlCode={item.urlCode} />
                    );
                })
            }
        </div>
    );
}

export default Links;
