import React from "react";
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Drawer from '@mui/material/Drawer';

function SidePanel({open,setOpen}: {open:boolean,setOpen:Function}) {
    
  function closeDrawer (){
    return(<Drawer variant="persistent" sx={{[`& .MuiDrawer-paper`]: { width: 60, marginTop:7, boxSizing: 'border-box' }}} className='w-[280px] h-full flex flex-col absolute top-[60px] left-0'
        open={!open} onClose={()=>setOpen(false)}>
          <a href='/home' className='flex gap-[20px] hover:bg-[#feefc3] p-[10px] pl-[20px] mt-[10px] rounded-r-full'><LightbulbOutlinedIcon/></a>
          <a href='/archive' className='flex gap-[20px] hover:bg-[#feefc3] p-[10px] pl-[20px] mt-[10px] rounded-r-full'><ArchiveOutlinedIcon/></a>
          <a href='/trash' className='flex gap-[20px] hover:bg-[#feefc3] p-[10px] pl-[20px] mt-[10px] rounded-r-full'><DeleteOutlineIcon/></a>
      </Drawer>)
  }

  function openDrawer(){
    return(<Drawer variant="persistent" sx={{[`& .MuiDrawer-paper`]: { width: 280, marginTop:7, boxSizing: 'border-box' }}} className='w-[280px] h-full flex flex-col absolute top-[60px] left-0'
        open={open} onClose={()=>setOpen(false)}>
          <a href='/home' className='flex gap-[20px] hover:bg-[#feefc3] p-[10px] pl-[20px] mt-[10px] rounded-r-full'><LightbulbOutlinedIcon/><p>Notes</p></a>
          <a href='/archive' className='flex gap-[20px] hover:bg-[#feefc3] p-[10px] pl-[20px] mt-[10px] rounded-r-full'><ArchiveOutlinedIcon/><p>Archive</p></a>
          <a href='/trash' className='flex gap-[20px] hover:bg-[#feefc3] p-[10px] pl-[20px] mt-[10px] rounded-r-full'><DeleteOutlineIcon/><p>Trash</p></a>
      </Drawer>)
  }
    return(
        open?openDrawer():closeDrawer()
    )
}

export default SidePanel