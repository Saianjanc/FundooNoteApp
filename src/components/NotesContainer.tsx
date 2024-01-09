import React, { useEffect, useState } from 'react'
import NoteCard from './NoteCard'
import TakeNote from './TakeNote'
import { GetNote } from '../utils/NoteService'

function NotesContainer(){
    const [noteList,setNoteList]=useState<Array<object>>([])
    // const addNote = (obj: object)=>{
    //     // setNoteList(...noteList,obj)
    // }
    console.log(noteList);
    const getNotes = async () => {
        const a = await GetNote();
        setNoteList(a)
    }
    useEffect(()=>{getNotes()},[])
    return(<><center className='mt-[80px]'><TakeNote setData={setNoteList} /><br/><NoteCard/></center></>)
}

export default NotesContainer