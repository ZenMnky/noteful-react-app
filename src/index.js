import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from './Components/Context'

ReactDOM.render(
  <Router>
    <Provider>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);
