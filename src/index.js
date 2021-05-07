import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import axios from 'axios';
import store from './redux/store';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';




axios.defaults.baseURL = "https://api.jciremit.com/api";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
