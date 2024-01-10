import React from 'react'
import addalert from '../assets/addalert.svg'
import addimage from '../assets/addimage.svg'
import archive from '../assets/archive.svg'
import addperson from '../assets/personadd.svg'
import more from '../assets/morevert.svg'
import palette from '../assets/palette.svg'

import Button from '@mui/material/Button';

function ButtonContainer(props:any) {
    const makeArchive = ()=>{
        const note = {
            noteIdList:[props.noteId],
            isArchived:true
        }
        props.action(note,"archive")
    }

    const deleteNote = ()=>{
        const note = {
            isDeleted: true,
            noteIdList:[props.noteId]
        }
        props.action(note,"trash")
    }

return (
    <>
    <Button title='Remind me' className='!w-[35px] !min-w-0'><img src={addalert} alt="addalert" /></Button>
    <Button title='Collaborator' className='!w-[35px] !min-w-0'><img src={addperson} alt="addperson" /></Button>
    <Button title='Background options' className='!w-[35px] !min-w-0'><img src={palette} alt="palette" /></Button>
    <Button title='Add image' className='!w-[35px] !min-w-0'><img src={addimage} alt="addimage" /></Button>
    <Button onClick={()=>makeArchive()} title='Archive' className='!w-[35px] !min-w-0'><img src={archive} alt="archive" /></Button>
    <Button onClick={()=>deleteNote()} title='More' className='!w-[35px] !min-w-0'><img src={more} alt="more" /></Button>
    </>
    )
}

export default ButtonContainer