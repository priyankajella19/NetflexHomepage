import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Netflexindex } from './Netflex/Netflexindex';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import { Databinding } from './databinding';
import { Card } from './cards';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Card/>
  </React.StrictMode>
);
reportWebVitals();
