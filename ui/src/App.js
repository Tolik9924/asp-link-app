import { Provider } from 'react-redux';
import './App.css';
import ShortLink from './Components/ShortLink/ShortLink';
import { storeLink } from './store';

function App() {
    return (
        <div>
            <Provider store={storeLink}>
                <ShortLink />
            </Provider>
        </div>
    );
}

export default App;
