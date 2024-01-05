import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './components/Login'
import SignUp from './components/SignUp'
import Home from './components/Home'
import Err from './components/Err';
import NotFound from './components/NotFound';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

let router = createBrowserRouter([
    {
       path:'/',
       element:<Login/>,
    },
    {
        path:'signup',
        element:<SignUp/>
    },
    {
        path:'home',
        element:<Home/>
    },
    {
        path:'err/:err',
        element:<Err/>
    },
    {
        path:'*',
        element:<NotFound/>
    }
 ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
            <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
