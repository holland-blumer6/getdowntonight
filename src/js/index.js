import React from 'react';
import ReactDOM from 'react-dom';
import '../css/style.scss';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import App from './pages/App';
import userReducer from './features/user';
import themeReducer from './features/theme';

const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
