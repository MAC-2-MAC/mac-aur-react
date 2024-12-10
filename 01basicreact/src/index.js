import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.js'

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    < App/>
  </React.StrictMode>
)

//ReactDOM.createRoot(document.getElementById('root')).render(<App/>); we give like this also without giving the virtual dom in a variable reference to render it.
