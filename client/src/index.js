import React from 'react';
import ReactDOM from 'react-dom';
import { AppProvider } from '@shopify/polaris';
import '@shopify/polaris/styles.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <AppProvider
    apiKey="secret stuff"
    shopOrigin="https://meatstick.myshopify.com"
  >
    <App />
  </AppProvider>,
  document.getElementById('root')
);
registerServiceWorker();
