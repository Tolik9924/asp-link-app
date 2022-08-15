import React from 'react';
import ExampleDocs from '../../Components/ExampleDocs/ExampleDocs';
import HeaderDocs from '../../Components/HeaderDocs/HeaderDocs';
import ItemOfPage from '../../Components/ItemOfPage/ItemOfPage';

import style from './docs.module.css';

const bracketOpen = '{';
const bracketClose = '}';

const Docs = () => {
    return (
        <div className={style.docs}>
            <div className={style.header}>
                <HeaderDocs>
                    asd.link API Documentation
                </HeaderDocs>
            </div>
            <div className={style.apiBase}>
                <ItemOfPage>
                    API Base
                </ItemOfPage>
                <ExampleDocs>
                    <p>
                        POST: http://localhost:5000/api/link/shortUrl
                    </p>
                    <p>
                        GET: http://localhost:5000/api/getLongLink/
                    </p>
                </ExampleDocs>
            </div>
            <div className={style.authentication}>
                <ItemOfPage>
                    Authentication
                </ItemOfPage>
                <p>This API doesn't require any Authentication.</p>
            </div>
            <div className={style.shorteringLink}>
                <ItemOfPage>
                    Shortening a Link   
                </ItemOfPage>
                <ExampleDocs>
                    <p>POST:  axios.post('http://localhost:5000/api/link/shortUrl', {bracketOpen}longUrl: link.linkName{bracketClose})</p>
                </ExampleDocs>
                <p>Response</p>
                <ExampleDocs>
                    <p>{bracketOpen}</p>
                    <p className={style.exampleCode}>"_id": "62f9fffb31945f759decbc9d",</p>
                    <p className={style.exampleCode}>"urlCode": "yvI3R3ZXg",</p>
                    <p className={style.exampleCode}>"longUrl": "https://github.com/Tolik9924/asp-link-app",</p>
                    <p className={style.exampleCode}>"shortUrl": "http:localhost:5000/api/getlink/yvI3R3ZXg",</p>
                    <p className={style.exampleCode}>"date": "Mon Aug 15 2022 11:12:43 GMT+0300 (Восточная Европа, летнее время)",</p>
                    <p className={style.exampleCode}>"__v": 0</p>
                    <p>{bracketClose}</p>
                </ExampleDocs>
            </div>
            <div className={style.getLongUrl}>
                <ItemOfPage>
                    Getting information on a Link
                </ItemOfPage>
                <ExampleDocs>
                    <p>GET: axios.get('http://localhost:5000/api/getLongLink/yourCode')</p>
                </ExampleDocs>
                <p>Response</p>
                <ExampleDocs>
                    <p>https://github.com/Tolik9924/asp-link-app</p>
                </ExampleDocs>
            </div>
        </div>
    );
}

export default Docs;
