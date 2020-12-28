import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from './Apps/redux/store'
import './static/css/bootstrap.css'
import './static/css/color.css'
import './static/css/icones.css'
import './static/css/style.css'
import './static/css/animate.css'
import { CookiesProvider } from 'react-cookie';
import App from './Apps'
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <CookiesProvider>
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    </CookiesProvider>,
    document.getElementById('root')
);
