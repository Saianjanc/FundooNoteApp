import React, { useState } from 'react'
import addalert from '../assets/addalert.svg'
import addimage from '../assets/addimage.svg'
import archive from '../assets/archive.svg'
import addperson from '../assets/personadd.svg'
import more from '../assets/morevert.svg'
import palette from '../assets/palette.svg'
import pin from '../assets/pin.svg'
import undo from '../assets/undo.svg'
import redo from '../assets/redo.svg'

import Button from '@mui/material/Button';
import CheckBoxIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushIcon from '@mui/icons-material/Brush';
import ImageIcon from '@mui/icons-material/ImageOutlined';
import { AddNote } from '../utils/NoteService'

function TakeNote({setData}:{setData:Function}){
    const [expandNote,setExpandNote] = useState(false)
    function addnote(){
        let title=(document.getElementById('notetitle') as HTMLInputElement).value
        let desc=(document.getElementById('notedesc') as HTMLInputElement).value
        let noteobj = {title:title,description:desc}
        setData((prevData:any) => [...prevData,noteobj])
        AddNote(noteobj)
        setExpandNote(false)
    }
    function openNote(){
        return(<div className="w-[600px] h-[135.6px] border-gray-400 rounded-lg border-2 relative m-[10px]">
            <div className='pt-[10px] pr-[10px] pl-[10px] pb-[4px]'>
            <input type='text' id='notetitle' className="w-full mb-[4px] text-base font-medium leading-6 pt-3; font-family: 'Google Sans', Roboto, Arial, sans-serif outline-none" placeholder='Title' />
            <textarea id='notedesc' className="h-full w-full font-normal leading-5; font-family: Roboto, Arial, sans-serif resize-none outline-none" placeholder='Take Note...'/>
            </div>
            <div className='mb-[4px] flex justify-between ml-[10px] mr-[10px]'>
            <div className="flex gap-[15px]">
                <Button title='Remind me' className='!w-[35px] !min-w-0'><img src={addalert} alt="addalert" /></Button>
                <Button title='Collaborator' className='!w-[35px] !min-w-0'><img src={addperson} alt="addperson" /></Button>
                <Button title='Background options' className='!w-[35px] !min-w-0'><img src={palette} alt="palette" /></Button>
                <Button title='Add image' className='!w-[35px] !min-w-0'><img src={addimage} alt="addimage" /></Button>
                <Button title='Archive' className='!w-[35px] !min-w-0'><img src={archive} alt="archive" /></Button>
                <Button title='More' className='!w-[35px] !min-w-0'><img src={more} alt="more" /></Button>
                <Button title='Undo' className='!w-[35px] !min-w-0'><img src={undo} alt="more" /></Button>
                <Button title='Redo' className='!w-[35px] !min-w-0'><img src={redo} alt="more" /></Button>
            </div>
            <Button onClick={()=>{addnote()}} variant="text" className='!normal-case'>Close</Button>
            </div>
            <button title='Pin Note' className='absolute top-2 right-2'><img  src={pin} alt="pin" /></button>
        </div>)
    }
    function closeNote(){
        return(
            <div onClick={()=>setExpandNote(true)} className="w-[600px] h-[46px] border-gray-400 rounded-lg border-2 relative m-[10px]">
            <div className='pt-[5px] pr-[10px] pl-[10px] pb-[4px] flex items-center gap-[20px]'>
            <input type='text' className="w-full mb-[4px] text-base font-medium leading-6 pt-3; font-family: 'Google Sans', Roboto, Arial, sans-serif outline-none" placeholder='Take Note...' />
            <Button title='New list' className='!w-[35px] !min-w-0'><CheckBoxIcon/></Button>
            <Button title='New note with drawing' className='!w-[35px] !min-w-0'><BrushIcon/></Button>
            <Button title='New note with image' className='!w-[35px] !min-w-0'><ImageIcon/></Button>
            </div>
        </div>
        )
    }
    return (
        expandNote?openNote():closeNote()
    )
}

export default TakeNote