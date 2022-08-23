import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';

import style from './header.module.css';

const Header = () => {

    const [link, setLink] = useState(false);

    const handleClick = () => {
        setLink(!link);
    }

    return (
        <div className={style.container}>
            <div className={style.left}>
                <Logo />
            </div>
            <div className={style.right}>
                <div className={style.validateContainer} onClick={handleClick}>
                    {
                        link ?
                            <Link to="/asp-link-app" className={style.validate}>{
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
