import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseNewId } from '../../store/linkReducer';
import Button from '../../Components/Button/Button';
import Input from '../../Components/Input/Input';
import Links from '../../Components/Links/Links';
import NamePage from '../../Components/NamePage/NamePage';

import { addLink } from '../../asyncActions/link.js';

import style from './shortLink.module.css';

const ShortLink = ({
    copy,
    copyText
}) => {

    const dispatch = useDispatch();

    const link = useSelector(state => state.link);

    const [nameLink, setNameLink] = useState('');
    const [url, setUrl] = useState('');

    const newLinkAdd = (e) => {

        e.preventDefault();

        console.log('add link');

        const newLink = {
            id: link.newId,
            linkName: nameLink,
            urlCode: '',
            url: url
        }

        link.links = link.links.filter(item => item.url === url);

        dispatch(addLink(newLink));
        dispatch(increaseNewId());

        setUrl(nameLink);
        setNameLink('');
    }

    const handleChange = (event) => {
        setNameLink(event.target.value);
    }

    return (
        <div className={style.shortLink}>
            <NamePage name={'short'} />
            <form onSubmit={newLinkAdd}>
                <div className={style.input}>
                    <Input placeholder='http://type-your-link.here ...'
                        value={nameLink}
                        handleChange={handleChange}
                        type='url' />
                </div>
                <div className={style.button}>
                    <Button type='submit'
                        theme='short'>
                        Short me!
                    </Button>
                </div>
            </form>
            <Links links={link.links}
                copyText={copyText}
                url={url} />
            {copy ?
                <div className={style.textCopied}><p>text copied</p></div> : null}
        </div>
    );
}

export default ShortLink;
