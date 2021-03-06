import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import 'bootswatch/dist/lumen/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
