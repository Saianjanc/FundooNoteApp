import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Login from './components/Login'
import SignUp from './components/SignUp'
import Err from './components/Err';
import NotFound from './components/NotFound';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import NotesContainer from './components/NotesContainer';
import ArchiveContainer from './components/ArchiveContainer';
import TrashContainer from './components/TrashContainer';

let router = createBrowserRouter([
    {
       path:'/',
       element:<Login/>
    },
    {
        path:'signup',
        element:<SignUp/>
    },
    {
        path:'/',
        element:<Dashboard/>,
        children:[
            {
                path:'notes/:noteId?',
                element:<NotesContainer/>
            },
            {
                path:'archive/:noteId?',
                element:<ArchiveContainer/>,
            },
            {
                path:'trash',
                element:<TrashContainer/>
            }
        ]
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

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(<RouterProvider router={router} />);
