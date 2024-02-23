import React from "react";
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Drawer from '@mui/material/Drawer';
import { useNavigate } from "react-router-dom";

function SidePanel({open,setOpen}: {open:boolean,setOpen:Function}) {
  const navigate = useNavigate()
  function closeDrawer (){
    return(<Drawer variant="persistent" sx={{[`& .MuiDrawer-paper`]: { width: 60, marginTop:7, boxSizing: 'border-box' }}}
        open={!open} onClose={()=>setOpen(false)}>
          <div onClick={()=>navigate('/notes')} className='flex gap-[20px] hover:bg-[#feefc3] p-[10px] pl-[20px] mt-[10px] rounded-r-full'><LightbulbOutlinedIcon/></div>
          <div onClick={()=>navigate('/archive')} className='flex gap-[20px] hover:bg-[#feefc3] p-[10px] pl-[20px] mt-[10px] rounded-r-full'><ArchiveOutlinedIcon/></div>
          <div onClick={()=>navigate('/trash')} className='flex gap-[20px] hover:bg-[#feefc3] p-[10px] pl-[20px] mt-[10px] rounded-r-full'><DeleteOutlineIcon/></div>
      </Drawer>)
  }

  function openDrawer (){
    return(<Drawer variant="persistent" sx={{[`& .MuiDrawer-paper`]: { width: 280, marginTop:7, boxSizing: 'border-box' }}}
        open={open} onClose={()=>setOpen(false)}>
          <div onClick={()=>navigate('/notes')} className='flex gap-[20px] hover:bg-[#feefc3] p-[10px] pl-[20px] mt-[10px] rounded-r-full'><LightbulbOutlinedIcon/><p>Notes</p></div>
          <div onClick={()=>navigate('/archive')} className='flex gap-[20px] hover:bg-[#feefc3] p-[10px] pl-[20px] mt-[10px] rounded-r-full'><ArchiveOutlinedIcon/><p>Archive</p></div>
          <div onClick={()=>navigate('/trash')} className='flex gap-[20px] hover:bg-[#feefc3] p-[10px] pl-[20px] mt-[10px] rounded-r-full'><DeleteOutlineIcon/><p>Trash</p></div>
      </Drawer>)
  }
    return(
        open?openDrawer():closeDrawer()
    )
}

export default SidePanel