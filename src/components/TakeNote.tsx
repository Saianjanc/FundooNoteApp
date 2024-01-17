import React, { useEffect, useState } from 'react'
import pin from '../assets/pin.svg'

import { IconButton, Input, Menu } from '@mui/material';
import { Redo,Undo,AddAlertOutlined,PaletteOutlined,PersonAddAltOutlined,MoreVertOutlined,ArchiveOutlined,ImageOutlined,Brush,CheckBoxOutlined,Circle, Block  } from '@mui/icons-material';

function TakeNote({action,note,expandNote,setExpandNote,edit}:{action:Function,note:any,expandNote:boolean,setExpandNote:Function,edit:string}){
    const [colorMenu, setColorMenu] = useState(null)
    const openColor = Boolean(colorMenu);
    const [color, setColor] = useState("#ffffff")
    const pickColor = (e:any)=>{
        setColorMenu(e.currentTarget)
    }
    const noteColor = (colour:string)=>{
        setColor(colour)
        setColorMenu(null)
    }
    function addnote(){
        const title=(document.getElementById('notetitle') as HTMLInputElement).value
        const desc=(document.getElementById('notedesc') as HTMLInputElement).value
        if (edit!=="edit") {
            const noteobj = {title:title,description:desc,color:color}
            action(noteobj,"create")
            setExpandNote(false)
        }else{setExpandNote(false)
            const noteobj = {title:title,description:desc,id:note.id,noteId:note.id,isArchived:note.isArchived,isDeleted:note.isDeleted,color:color}
            action(noteobj,"update")}
    }
    const editNote = ()=>{
        if (edit==="edit") {
            setColor(note.color)
            setExpandNote(true)}
    }
    useEffect(()=>editNote(),[])
    function openNote(){
        return(<div className="w-[310px] xl:w-[600px] border-gray-400 rounded-lg border-2 relative m-[10px]" style={{backgroundColor:color}}>
            <div className='pt-[5px] pr-[10px] pl-[10px] pb-[2px]'>
            <Input type='text' defaultValue={(edit==="edit")?note.title:""} id='notetitle' className="w-full mb-[2px] text-base font-medium leading-6 pt-3; outline-none bg-transparent" placeholder='Title' disableUnderline={true} sx={{fontFamily:"unset",fontWeight:500}}/>
            <Input id='notedesc' defaultValue={(edit==="edit")?note.description:""} className="h-full w-full font-normal leading-5; font-family: Roboto, Arial, sans-serif resize-none outline-none bg-transparent" placeholder='Take Note...' disableUnderline={true} multiline={true} minRows={2} maxRows={(edit==="edit")?6:2} sx={{fontFamily:"unset",fontWeight:500}}/>
            </div>
            <div className='mb-[4px] flex flex-wrap justify-between ml-[10px] xl:mr-[10px]'>
            <div className="flex flex-wrap xl:gap-[15px]">
                <IconButton title='Remind me' className='!w-[35px] !min-w-0'><AddAlertOutlined/></IconButton>
                <IconButton title='Collaborator' className='!w-[35px] !min-w-0'><PersonAddAltOutlined/></IconButton>
                <IconButton onClick={pickColor} title='Background options' className='!w-[35px] !min-w-0'><PaletteOutlined/></IconButton>
                <IconButton title='Add image' className='!w-[35px] !min-w-0'><ImageOutlined/></IconButton>
                <IconButton title='Archive' className='!w-[35px] !min-w-0'><ArchiveOutlined/></IconButton>
                <IconButton title='More' className='!w-[35px] !min-w-0'><MoreVertOutlined/></IconButton>
                <IconButton title='Undo' className='!w-[35px] !min-w-0'><Undo sx={{fontSize:18}}/></IconButton>
                <IconButton title='Redo' className='!w-[35px] !min-w-0'><Redo sx={{fontSize:18}}/></IconButton>
            </div>
            <IconButton onClick={()=>{addnote()}} className='!normal-case !text-base font-semibold !text-black'>Close</IconButton>
            </div>
            <button title='Pin Note' className='absolute top-2 right-2'><img  src={pin} alt="pin" /></button>
            <Menu open={openColor} onClose={()=>setColorMenu(null)}
        anchorEl={colorMenu}>
        <div className='flex'>
            <IconButton onClick={()=>noteColor('#FFFFFF')}><Block/></IconButton>
            <IconButton onClick={()=>noteColor('#94bbe9')}><Circle sx={{ color: '#94bbe9' }}/></IconButton>
            <IconButton onClick={()=>noteColor('#32a852')}><Circle sx={{ color: '#32a852' }}/></IconButton>
            <IconButton onClick={()=>noteColor('#4287f5')}><Circle sx={{ color: '#4287f5' }}/></IconButton>
            <IconButton onClick={()=>noteColor('#FF5733')}><Circle sx={{ color: '#FF5733' }}/></IconButton>
            <IconButton onClick={()=>noteColor('#FFBD33')}><Circle sx={{ color: '#FFBD33' }}/></IconButton>
            <IconButton onClick={()=>noteColor('#33FFBD')}><Circle sx={{ color: '#33FFBD' }}/></IconButton>
        </div>
        </Menu>
        </div>)
    }
    function closeNote(){
        return(
            <div onClick={()=>setExpandNote(true)} className="h-[46px] border-gray-400 rounded-lg border-2 relative m-[5px] xl:w-[600px]">
            <div className='pt-[2px] pr-[10px] pl-[10px] pb-[4px] flex items-center gap-[20px]'>
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