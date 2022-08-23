import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ShortLink from './page/ShortLink/ShortLink';
import LongLink from './page/LongLink/LongLink';
import { storeLink } from './store';
import Header from './Components/Header/Header';
import Error from './page/Error/Error';
import Docs from './page/Docs/Docs';

function App() {

    const [copy, setCopy] = useState(false);

    const copyText = async (link) => {
        await navigator.clipboard.writeText(link).then(() => {
            setCopy(true);
            setTimeout(() => {
                setCopy(false); 
            }, 3000);
        })
    }

    return (
        <div className='container'>
            <Header />
            <Routes>
                <Route exact path="/asp-link-app" element={
                    <Provider store={storeLink}>
                        <ShortLink copy={copy} 
                                   setCopy={setCopy}
                                   copyText={copyText} />
                    </Provider>
                } />
                <Route path="/validateLink" element={
                    <Provider store={storeLink}>
                        <LongLink copy={copy} 
                                  setCopy={setCopy}
                                  copyText={copyText} />
                    </Provider>
                } />
                <Route path="docs" element={<Docs />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </div>
    );
}

export default App;
