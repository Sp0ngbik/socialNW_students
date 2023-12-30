import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import AppContainer from "./AppContainer";
import 'react-toastify/dist/ReactToastify.css';
import MainApp from "./App";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);


root.render(<MainApp/>
);


reportWebVitals();
