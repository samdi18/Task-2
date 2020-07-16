import React, { Fragment } from 'react';
import Home from './components/layout/Home';

import './App.css';

// Redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Fragment>
        <Home />
      </Fragment>
    </Provider>
  );
};

export default App;
