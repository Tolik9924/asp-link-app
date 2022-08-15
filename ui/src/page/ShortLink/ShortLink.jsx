import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseNewId } from '../../store/linkReducer';
import Button from '../../Components/Button/Button';
import Input from '../../Components/Input/Input';
import Links from '../../Components/Links/Links';
import NamePage from '../../Components/NamePage/NamePage';

import { addLink } from '../../asyncActions/link.js';

import style from './shortLink.module.css';

const ShortLink = () => {

    const dispatch = useDispatch();

    const link = useSelector(state => state.link);

    const [nameLink, setNameLink] = useState('');

    console.log(link);

    const copyText = async (link) => {
        await navigator.clipboard.writeText(link)
    }

    const newLinkAdd = (e) => {

        e.preventDefault();

        const newLink = {
            id: link.newId,
            linkName: nameLink,
            urlCode: ''
        }

        dispatch(addLink(newLink));
        dispatch(increaseNewId());

        setNameLink('');
    }

    const handleChange = (event) => {
        setNameLink(event.target.value);
    }

    return (
        <div>
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
                        Short me
                    </Button>
                </div>
            </form>
            <Links links={link.links} copyText={copyText} />
        </div>
    );
}

export default ShortLink;
