import React from 'react';

import style from './exampleDocs.module.css';

const ExampleDocs = ({children}) => {
    return(
        <div className={style.example}>
            {children}
        </div>
    );
}

export default ExampleDocs;
