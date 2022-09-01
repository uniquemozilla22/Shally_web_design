import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import 'mdb-ui-kit/js/mdb.min.js';
import { Provider } from 'react-redux';
import store from './Redux/store';
import { BrowserRouter } from 'react-router-dom';
import "animate.css/animate.min.css";

const baseURL =
  process.env.NODE_ENV !== "development"
    ? "/Shally_web_design"
    : "/shally";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={baseURL}>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
