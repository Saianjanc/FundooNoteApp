import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Login from './components/Login'
import SignUp from './components/SignUp'
import Err from './components/Err';
import NotFound from './components/NotFound';
import SidePanel from './components/SidePanel';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
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
                path:'notes',
                element:<NotesContainer/>
            },
            {
                path:'archive',
                element:<ArchiveContainer/>
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

function Dashboard() {
    const [openDrawer,setOpenDrawer] = useState(false)
    return(<>
    <div className='w-full h-[48px] mt-[8px] border-b-2 flex items-center gap-[20px] sticky top-0 bg-white z-10'>
        <button onClick={()=>{
            if (openDrawer){setOpenDrawer(false)}
            else{setOpenDrawer(true)}}
            } className='ml-[20px]'><MenuIcon/></button>
        <div className='w-[202px] h-[48px] pr-[30px]'>
            <a href='/notes' className='flex gap-[5px] items-center'>
            <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" className='w-[40px] h-[40px]' alt='Head Logo'/>
            <p className='text-[#5f6368] text-2xl font-sans'>Keep</p>
            </a>
        </div>
    </div>
    <SidePanel open={openDrawer} setOpen={setOpenDrawer}/>
    <div className={openDrawer?'ml-[300px]':'ml-[100px]'}>
    <Outlet />
    </div>
    </>)
}

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(<RouterProvider router={router} />);
