import React from 'react';
import ReactDOM from 'react-dom';
/*import '../src/styles/index.css';*/
import '../src/styles/main.css';


import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.jsx';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
