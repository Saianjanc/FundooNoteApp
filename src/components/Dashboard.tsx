import React,{ useState } from "react"
import SidePanel from './SidePanel';
import { Outlet, useNavigate } from "react-router-dom";
import { Circle, MenuOutlined } from "@mui/icons-material";
import { Button, IconButton, Menu } from "@mui/material";
import { userLogout } from "../utils/UserService";

function Dashboard() {
    const [openDrawer,setOpenDrawer] = useState(false)
    const [menu, setMenu] = useState(null); 
    const open = Boolean(menu); 
    const userName = localStorage.getItem("userName")
    const userEmail = localStorage.getItem("userEmail")
    const navigate = useNavigate()

    const handleClick = (e:any) => {
        setMenu(e.currentTarget); 
    }
    const logout = ()=>{
        userLogout(navigate)
        localStorage.clear()
    }
    return(<>
    <div className='w-full h-[48px] mt-[8px] border-b-2 flex items-center sticky top-0 bg-white z-10 justify-between'>
        <div className='flex gap-[20px]'>
        <button onClick={()=>{
            if (openDrawer){setOpenDrawer(false)}
            else{setOpenDrawer(true)}}
            } className='ml-[20px]'><MenuOutlined/></button>
        <div className='w-[202px] h-[48px] pr-[30px]'>
            <a href='/notes' className='flex gap-[5px] items-center'>
            <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" className='w-[40px] h-[40px]' alt='Head Logo'/>
            <p className='text-[#5f6368] text-2xl font-sans'>Keep</p>
            </a>
        </div>
        </div>
        <div className='mr-[50px] relative'>
            <IconButton onClick={handleClick}>
            <Circle sx={{ color: '#00CDB7', fontSize: 45 }}/>
            <span className='absolute top-[10px] left-[28px]'>{userName![0]}</span>
            </IconButton>
        </div>
        <Menu id="simple-menu" open={open} onClose={()=>setMenu(null)}
        anchorEl={menu}>
        <div className='w-[240px] flex flex-col items-center gap-[20px]'>
            <div className="absolute left-0">
            <Circle sx={{ color: '#00CDB7', fontSize: 80 }}/>
            <span className='absolute top-[14px] left-[38px] text-white text-4xl'>{userName![0]}</span>
            </div>
            <div className="flex flex-col mt-[10px] ml-[80px]">
            <span>{userName}</span>
            <span>{userEmail}</span>
            </div>
        <Button variant="contained" onClick={logout}>Sign out</Button>
        </div>
      </Menu>
    </div>
    <SidePanel open={openDrawer} setOpen={setOpenDrawer}/>
    <div className={openDrawer?'ml-[300px]':'ml-[100px]'}>
    <Outlet />
    </div>
    </>)
}
export default Dashboard