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
    return (
        <div className='container'>
            <Header />
            <Routes>
                <Route exact path="/" element={
                    <Provider store={storeLink}>
                        <ShortLink />
                    </Provider>
                } />
                <Route path="/validateLink" element={
                    <Provider store={storeLink}>
                        <LongLink />
                    </Provider>
                } />
                <Route path="docs" element={<Docs />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </div>
    );
}

export default App;
