import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addLongLink } from '../../asyncActions/link';
import { increaseNewId } from '../../store/longLinkReducer';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';

import style from './longLink.module.css';
import NamePage from '../../Components/NamePage/NamePage';
import LongLinkLists from '../../Components/LongLinkLists/LongLinkLists';

const LongLink = ({
    copy,
    copyText
}) => {

    const dispatch = useDispatch();

    const codeLink = useSelector(state => state.longLink);

    const [code, setCode] = useState('');
    const [sameCode, setSameCode] = useState('');

    const newLinkAdd = (e) => {

        e.preventDefault();

        const newCode = {
            id: codeLink.newId,
            code: code,
            url: ''
        }

        codeLink.longLinks = codeLink.longLinks.filter(item => item.url === sameCode);

        dispatch(addLongLink(newCode));
        dispatch(increaseNewId());

        setSameCode(code);
        setCode('');
    }

    const handleChange = (event) => {
        setCode(event.target.value);
    }

    return (
        <div className={style.longLink}>
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
                        Validate me!
                    </Button>
                </div>
            </form>
            <LongLinkLists links={codeLink.longLinks} 
                           copyText={copyText} 
                           copy={copy} />
            {copy ?
            <div className={style.textCopied}><p>text copied</p></div> : null}
        </div>
    );
}

export default LongLink;
