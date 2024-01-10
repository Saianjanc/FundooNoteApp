import React, { useEffect, useState } from 'react'
import NoteCard from './NoteCard'
import TakeNote from './TakeNote'
import { addArchive, addNote, deleteNote, getNote } from '../utils/NoteService'

function NotesContainer(){
    const [runFlag,setRunFlag]=useState(false)
    const [noteList,setNoteList]=useState<Array<object>>([])
    const getNotes = async () => {
        const a = await getNote();
        const b = a.filter((ele:any)=>!ele.isArchived&&!ele.isDeleted)
        setNoteList(b)
    }
    function updateList(noteObj:object,action:string){
        if(action==="create"){
            setNoteList([...noteList, noteObj]);
            setRunFlag((prevState)=>!prevState)
            addNote(noteObj)
        }else if(action==="archive"){
            const c = noteList.filter((ele:any)=>!ele.isArchived&&!ele.isDeleted)
            setNoteList(c)
            setRunFlag((prevState)=>!prevState)
            addArchive(noteObj)
        }else if(action==="trash"){
            const d = noteList.filter((ele:any)=>!ele.isDeleted)
            setRunFlag((prevState)=>!prevState)
            setNoteList(d)
            deleteNote(noteObj)
        }
    }
    useEffect(()=>{getNotes()},[runFlag])
    return(<><center className='mt-[80px]'><TakeNote action={updateList} /><br/><div className='grid grid-cols-4 ml-[100px]'>
    {noteList.map((note:any) => (<NoteCard note={note} action={updateList}/>))}
    </div>
    </center></>)
}

export default NotesContainer