import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Add from './add';
import Details from './details';
import name from './card'

import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Routes>
        <Route exact path='/' element={<App />} />
        <Route exact path='/add' element={<Add />} />
        <Route exact path='/:name' element={<Details />} />
        
</Routes>

</Router>
,document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
