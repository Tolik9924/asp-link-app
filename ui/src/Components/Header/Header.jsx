import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

import style from './header.module.css';

const Header = () => {

    const [link, setLink] = useState(false);

    const handleClick = () => {
        setLink(!link);
    }

    return (
        <div className={style.container}>
            <div className={style.left}>
                asd.link®
            </div>
            <div className={style.right}>
                <div className={style.validateContainer} onClick={handleClick}>
                    {
                        link ?
                            <Link to="/" className={style.validate}>{
                                'Short Link'
                            }</Link>
                            :
                            <Link to="/validateLink" className={style.validate}>{
                                'Validate Link'
                            }</Link>
                    }
                </div>
                <div className={style.docsContainer}>
                    <Link to="/docs" className={style.docs} >docs</Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
