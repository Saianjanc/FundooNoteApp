import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Login from './components/Login'
import SignUp from './components/SignUp'
import Home from './components/Notes'
import Err from './components/Err';
import NotFound from './components/NotFound';
import SidePanel from './components/SidePanel';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';

let router = createBrowserRouter([
    {
       path:'/',
       element:<Login/>,
       errorElement:<Err/>
    },
    {
        path:'signup',
        element:<SignUp/>,
        errorElement:<Err/>
    },
    {
        path:'/',
        element:<Header/>,
        errorElement:<Err/>,
        children:[
            {
                path:'home',
                element:<Home/>,
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

function Header() {
    const [openDrawer,setOpenDrawer] = useState(false)
    return(<>
    <div className='w-full h-[48px] mt-[8px] border-b-2 flex items-center gap-[20px] fixed top-0'>
        <button onClick={()=>{
            if (openDrawer){setOpenDrawer(false)}
            else{setOpenDrawer(true)}}
            } className='ml-[20px]'><MenuIcon /></button>
        <div className='w-[202px] h-[48px] pr-[30px]'>
            <a href='/home' className='flex gap-[5px] items-center'>
            <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" className='w-[40px] h-[40px]' alt='Head Logo'/>
            <p className='text-[#5f6368] text-2xl font-sans'>Keep</p>
            </a>
        </div>
    </div>
    <SidePanel open={openDrawer} setOpen={setOpenDrawer}/>
    <Outlet />
    </>)
}

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
            <RouterProvider router={router} />
    </React.StrictMode>
);
