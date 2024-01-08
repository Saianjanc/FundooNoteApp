import addalert from '../assets/addalert.svg'
import addimage from '../assets/addimage.svg'
import archive from '../assets/archive.svg'
import addperson from '../assets/personadd.svg'
import more from '../assets/morevert.svg'
import palette from '../assets/palette.svg'
import pin from '../assets/pin.svg'
import check from '../assets/check.svg'

import Button from '@mui/material/Button';
import React from 'react'

function NoteCard() {
    return (
        <div className="flex flex-col justify-between h-[180px] min-h[103px] max-h-[385.2px] w-[240px] border-gray-400 rounded-lg border-2 relative m-[10px]">
        <div className='p-[10px]'>
            <input type='text' className="text-base font-medium leading-6 pt-3; font-family: 'Google Sans', Roboto, Arial, sans-serif mb-[4px] outline-none" placeholder='Title' />
            <textarea className="h-full w-full font-normal leading-5; font-family: Roboto, Arial, sans-serif resize-none outline-none"/>
            </div>
            <div className="flex justify-around mb-[4px]">
                <Button title='Remind me' className='!w-[35px] !min-w-0'><img src={addalert} alt="addalert" /></Button>
                <Button title='Collaborator' className='!w-[35px] !min-w-0'><img src={addperson} alt="addperson" /></Button>
                <Button title='Background options' className='!w-[35px] !min-w-0'><img src={palette} alt="palette" /></Button>
                <Button title='Add image' className='!w-[35px] !min-w-0'><img src={addimage} alt="addimage" /></Button>
                <Button title='Archive' className='!w-[35px] !min-w-0'><img src={archive} alt="archive" /></Button>
                <Button title='More' className='!w-[35px] !min-w-0'><img src={more} alt="more" /></Button>
            </div>
            <button title='Pin Note' className='absolute top-2 right-2'><img  src={pin} alt="pin" /></button>
            <button title='Select' className='absolute top-[-10px] left-[-10px]'><img  src={check} alt="check" /></button>
        </div>
    )
}

export default NoteCard