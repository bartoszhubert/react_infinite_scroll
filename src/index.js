import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import { Provider } from 'react-redux';
import configureStore from 'store';
import * as serviceWorker from './serviceWorker';
import GlobalStyles from 'styles/global';

const store = configureStore({});

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <GlobalStyles />
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
