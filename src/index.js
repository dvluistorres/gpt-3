import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { footer } from './containers';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

footer.add()

