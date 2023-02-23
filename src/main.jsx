import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import store from "./store";
import App from './components/app/App';
import { BrowserRouter } from 'react-router-dom';


let root = document.getElementById('root')
createRoot(root).render(
  <Provider store={store}>
    <div className='mx-auto' style={{width: 800}}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </div>
  </Provider>,
);