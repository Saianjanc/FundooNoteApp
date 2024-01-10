import React, { useEffect, useState } from 'react'
import { getArchive } from '../utils/NoteService'
import NoteCard from './NoteCard';

function ArchiveContainer() {
    const [noteList,setNoteList]=useState<Array<object>>([])
    const getNotes = async () => {
        const a = await getArchive();
        setNoteList(a)
    }
    useEffect(()=>{getNotes()},[])
    return(<div className='grid grid-cols-4 ml-[100px] mt-[80px]'>
    {noteList.map((note:any) => (<NoteCard note={note} action={()=>{}}/>))}
    </div>)
}

export default ArchiveContainer