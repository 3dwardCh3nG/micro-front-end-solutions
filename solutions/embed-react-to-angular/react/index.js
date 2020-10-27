import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';



const render = () => {
  if(!store.getState().loaded.angular) {
    return
  }
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('react')
  );
  unsubscribe();
}

const unsubscribe = store.subscribe(render)