import React from 'react';
import Button from '../Button/Button';
import Header from '../Header/Header';
import Input from '../Input/Input';
import NamePage from '../NamePage/NamePage';

import style from './shortLink.module.css';

const ShortLink = () => {

    const copyText = () => {
        navigator.clipboard.writeText('hi')
    }

    return (
        <div>
            <Header />
            <NamePage />
            <div className={style.input}>
                <Input placeholder='http://type-your-link.here ...' />
            </div>
            <div className={style.button}>
                <Button onClick={copyText} 
                        theme='short'>
                            Short me
                </Button>
            </div>
        </div>
    );
}

export default ShortLink;
