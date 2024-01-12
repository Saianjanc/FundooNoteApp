import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

import { IconButton, Menu, MenuItem } from '@mui/material/';
import { AddAlertOutlined,PaletteOutlined,PersonAddAltOutlined,MoreVertOutlined,ArchiveOutlined,ImageOutlined,UnarchiveOutlined,DeleteForever,RestoreFromTrash, CheckCircle } from '@mui/icons-material';
import Pin from '../assets/pin.svg';

function NoteCard({note,action}:{note:any,action:Function}) {
    const route = useLocation().pathname
    const [menu, setMenu] = useState(null); 
    const open = Boolean(menu); 
    const handleClick = (e:any) => { 
        setMenu(e.currentTarget); 
    }; 
    const makeArchive = ()=>{
        const noteObj = {
            id:note.id,
            noteIdList:[note.id],
            isArchived:true
        }
        action(noteObj,"archive")
    }

    const deleteNote = ()=>{
        const noteObj = {
            id:note.id,
            isDeleted: !note.isDeleted,
            noteIdList:[note.id]
        }
        action(noteObj,"trash")
    }

    const makeUnarchive = ()=>{
        const noteObj = {
            id:note.id,
            noteIdList:[note.id],
            isArchived:false
        }
        action(noteObj,"archive")
    }
    const removeNote = ()=>{
        const noteObj = {id:note.id,noteIdList:[note.id]}
        action(noteObj,"remove")
    }

    return (
        <div className="flex flex-col justify-between h-[180px] min-h[103px] max-h-[385.2px] w-[240px] border-gray-400 rounded-lg border-2 relative m-[10px] group">
        <div className='p-[10px]'>
        <input defaultValue={note.title} type='text' className="text-base font-medium leading-6 pt-3; font-family: 'Google Sans', Roboto, Arial, sans-serif mb-[4px] outline-none" placeholder='Title' />
        <textarea defaultValue={note.description} className="h-full w-full font-normal leading-5; font-family: Roboto, Arial, sans-serif resize-none outline-none"/>
            </div>
            <div className="hidden justify-around mb-[4px] group-hover:flex">
    {route==="/trash"?<><IconButton onClick={removeNote}><DeleteForever/></IconButton><IconButton onClick={deleteNote}><RestoreFromTrash/></IconButton></>:
    <>
        <IconButton title='Remind me' className='!w-[35px] !min-w-0'><AddAlertOutlined/></IconButton>
        <IconButton title='Collaborator' className='!w-[35px] !min-w-0'><PersonAddAltOutlined/></IconButton>
        <IconButton title='Background options' className='!w-[35px] !min-w-0'><PaletteOutlined/></IconButton>
        <IconButton title='Add image' className='!w-[35px] !min-w-0'><ImageOutlined/></IconButton>
        {route==="/archive"?
        <IconButton onClick={makeUnarchive} title='Archive' className='!w-[35px] !min-w-0'><UnarchiveOutlined/></IconButton>
        :<IconButton onClick={makeArchive} title='Archive' className='!w-[35px] !min-w-0' ><ArchiveOutlined/></IconButton>
        }
        <IconButton onClick={handleClick} title='More' className='!w-[35px] !min-w-0'
        aria-controls="simple-menu" aria-haspopup="true"><MoreVertOutlined/></IconButton>
        <Menu id="simple-menu" open={open} onClose={()=>setMenu(null)}
        anchorEl={menu}>
        <MenuItem onClick={deleteNote}>Delete</MenuItem>
        <MenuItem>Edit</MenuItem>
        <MenuItem>Add Label</MenuItem>
      </Menu></>}
        </div>
        <button title='Pin Note' className='invisible absolute top-2 right-2 group-hover:visible'><img src={Pin} alt='Pin'/></button>
        <button title='Select' className='invisible absolute top-[-10px] left-[-10px] group-hover:visible'><CheckCircle/></button>
        </div>
    )
}

export default NoteCard