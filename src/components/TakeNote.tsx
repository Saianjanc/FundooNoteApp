import React, { useEffect, useState } from 'react'
import pin from '../assets/pin.svg'

import IconButton from '@mui/material/IconButton';
import { Redo,Undo,AddAlertOutlined,PaletteOutlined,PersonAddAltOutlined,MoreVertOutlined,ArchiveOutlined,ImageOutlined,Brush,CheckBoxOutlined } from '@mui/icons-material';

function TakeNote({action,note,setOpenModal,edit}:{action:Function,note:any,setOpenModal:Function,edit:string}){
    const [expandNote,setExpandNote] = useState(false)
    function addnote(){
        const title=(document.getElementById('notetitle') as HTMLInputElement).value
        const desc=(document.getElementById('notedesc') as HTMLInputElement).value
        if (edit!=="edit") {
            const noteobj = {title:title,description:desc}
            action(noteobj,"create")
            setExpandNote(false)
        }else{setOpenModal(false)
            const noteobj = {title:title,description:desc,id:note.id,noteId:note.id,isArchived:note.isArchived,isDeleted:note.isDeleted}
            action(noteobj,"update")}
    }
    const editNote = ()=>{
        if (edit==="edit") {setExpandNote(true)}
    }
    useEffect(()=>editNote())
    function openNote(){
        return(<div className="w-[600px] h-[135.6px] border-gray-400 rounded-lg border-2 relative m-[10px] bg-white">
            <div className='pt-[10px] pr-[10px] pl-[10px] pb-[4px]'>
            {edit==="edit"?<input type='text' defaultValue={note.title} id='notetitle' className="w-full mb-[4px] text-base font-medium leading-6 pt-3; font-family: 'Google Sans', Roboto, Arial, sans-serif outline-none" placeholder='Title' />:<input type='text' defaultValue="" id='notetitle' className="w-full mb-[4px] text-base font-medium leading-6 pt-3; font-family: 'Google Sans', Roboto, Arial, sans-serif outline-none" placeholder='Title'/>}
            {edit==="edit"?<textarea id='notedesc' defaultValue={note.description} className="h-full w-full font-normal leading-5; font-family: Roboto, Arial, sans-serif resize-none outline-none" placeholder='Take Note...'/>
            :<textarea id='notedesc' defaultValue="" className="h-full w-full font-normal leading-5; font-family: Roboto, Arial, sans-serif resize-none outline-none" placeholder='Take Note...'/>}
            </div>
            <div className='mb-[4px] flex justify-between ml-[10px] mr-[10px]'>
            <div className="flex gap-[15px]">
                <IconButton title='Remind me' className='!w-[35px] !min-w-0'><AddAlertOutlined/></IconButton>
                <IconButton title='Collaborator' className='!w-[35px] !min-w-0'><PersonAddAltOutlined/></IconButton>
                <IconButton title='Background options' className='!w-[35px] !min-w-0'><PaletteOutlined/></IconButton>
                <IconButton title='Add image' className='!w-[35px] !min-w-0'><ImageOutlined/></IconButton>
                <IconButton title='Archive' className='!w-[35px] !min-w-0'><ArchiveOutlined/></IconButton>
                <IconButton title='More' className='!w-[35px] !min-w-0'><MoreVertOutlined/></IconButton>
                <IconButton title='Undo' className='!w-[35px] !min-w-0'><Undo sx={{fontSize:18}}/></IconButton>
                <IconButton title='Redo' className='!w-[35px] !min-w-0'><Redo sx={{fontSize:18}}/></IconButton>
            </div>
            <IconButton onClick={()=>{addnote()}} className='!normal-case !text-base font-semibold !text-black'>Close</IconButton>
            </div>
            <button title='Pin Note' className='absolute top-2 right-2'><img  src={pin} alt="pin" /></button>
        </div>)
    }
    function closeNote(){
        return(
            <div onClick={()=>setExpandNote(true)} className="w-[600px] h-[46px] border-gray-400 rounded-lg border-2 relative m-[10px]">
            <div className='pt-[5px] pr-[10px] pl-[10px] pb-[4px] flex items-center gap-[20px]'>
            <label className="text-left text-slate-400 w-full mb-[4px] text-base font-medium leading-6 pt-3; font-family: 'Google Sans', Roboto, Arial, sans-serif outline-none">Take Note...</label>
            <IconButton title='New list' className='!w-[35px] !min-w-0'><CheckBoxOutlined/></IconButton>
            <IconButton title='New note with drawing' className='!w-[35px] !min-w-0'><Brush/></IconButton>
            <IconButton title='New note with image' className='!w-[35px] !min-w-0'><ImageOutlined/></IconButton>
            </div>
        </div>
        )
    }
    return (
        expandNote?openNote():closeNote()
    )
}

export default TakeNote