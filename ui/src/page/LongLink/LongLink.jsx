import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addLongLink } from '../../asyncActions/link';
import { increaseNewId } from '../../store/longLinkReducer';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';

import style from './longLink.module.css';
import NamePage from '../../Components/NamePage/NamePage';
import LongLinkLists from '../../Components/LongLinkLists/LongLinkLists';

const LongLink = () => {

    const dispatch = useDispatch();

    const codeLink = useSelector(state => state.longLink);

    const [code, setCode] = useState('');

    console.log(codeLink);

    const copyText = async (link) => {
        await navigator.clipboard.writeText(link)
    }

    const newLinkAdd = (e) => {

        e.preventDefault();

        const newCode = {
            id: codeLink.newId,
            code: code,
            url: ''
        }

        dispatch(addLongLink(newCode));
        dispatch(increaseNewId());

        setCode('');
    }

    const handleChange = (event) => {
        setCode(event.target.value);
    }

    return (
        <div>
            <NamePage name='long' />
            <form onSubmit={newLinkAdd}>
                <div className={style.input}>
                    <Input placeholder='type your code here ...'
                        value={code}
                        handleChange={handleChange}
                        type='text' />
                </div>
                <div className={style.button}>
                    <Button type='submit'
                        theme='short'>
                        Validate me
                    </Button>
                </div>
            </form>
            <LongLinkLists links={codeLink.links} copyText={copyText} />
        </div>
    );
}

export default LongLink;
