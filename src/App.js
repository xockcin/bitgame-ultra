import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from 'react';
import Main from './components/Main'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {doToken} from './redux/doToken'

const store = createStore(doToken)

const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;


