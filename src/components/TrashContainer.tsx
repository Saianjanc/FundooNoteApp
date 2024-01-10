import React, { useEffect, useState } from 'react'
import { getTrash } from '../utils/NoteService'
import NoteCard from './NoteCard';

function TrashContainer() {
    const [noteList,setNoteList]=useState<Array<object>>([])
    const getNotes = async () => {
        const a = await getTrash();
        setNoteList(a)
    }
    useEffect(()=>{getNotes()},[])
    return(<div className='grid grid-cols-4 ml-[100px] mt-[80px]'>
    {noteList.map((note:any) => (<NoteCard note={note} action={()=>{}}/>))}
    </div>)
}

export default TrashContainer