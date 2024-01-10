import React from 'react'
import pin from '../assets/pin.svg'
import check from '../assets/check.svg'
import ButtonContainer from './ButtonContainer'

function NoteCard({note,action}:{note:any,action:Function}) {
    return (
        <div className="flex flex-col justify-between h-[180px] min-h[103px] max-h-[385.2px] w-[240px] border-gray-400 rounded-lg border-2 relative m-[10px]">
        <div className='p-[10px]'>
        <input defaultValue={note.title} type='text' className="text-base font-medium leading-6 pt-3; font-family: 'Google Sans', Roboto, Arial, sans-serif mb-[4px] outline-none" placeholder='Title' />
        <textarea defaultValue={note.description} className="h-full w-full font-normal leading-5; font-family: Roboto, Arial, sans-serif resize-none outline-none"/>
            </div>
            <div className="flex justify-around mb-[4px]">
            <ButtonContainer noteId={note.id} action={action}/>
            </div>
            <button title='Pin Note' className='absolute top-2 right-2'><img  src={pin} alt="pin" /></button>
            <button title='Select' className='absolute top-[-10px] left-[-10px]'><img  src={check} alt="check" /></button>
        </div>
    )
}

export default NoteCard