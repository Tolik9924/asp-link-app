import React from 'react';
import Button from '../Button/Button';

import style from './header.module.css';

const Header = () => {
    return(
        <div className={style.container}>
            <div className={style.left}>
                asd.link
            </div>
            <div className={style.right}>
                <div className={style.validateContainer}>
                    <a className={style.validate} href="/#">Validate link</a>
                </div>
                <div classname={style.docs}>
                    <Button theme='header'>docs</Button>
                </div>
            </div>
        </div>
    );
}

export default Header;
