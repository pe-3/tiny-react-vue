import React from 'react';
import ReactDOM from 'react-dom/client';
import TinyButton from '@opentiny/react/button/pc'

function App() {
  return (<div id="app">
    <TinyButton />
  </div>)
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
