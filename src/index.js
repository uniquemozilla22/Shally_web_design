import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import 'mdb-ui-kit/css/mdb.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import 'mdb-ui-kit/js/mdb.min.js';
// import 'mdb-react-ui-kit/dist/mdb-react-ui-kit.esm.js'
// import 'mdb-react-ui-kit/dist/mdb-react-ui-kit.js'
import { Provider } from 'react-redux';
import store from './Redux/store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
