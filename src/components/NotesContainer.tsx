import React, { useEffect, useState } from 'react'
import NoteCard from './NoteCard'
import TakeNote from './TakeNote'
import { addArchive, addNote, deleteNote, getNote } from '../utils/NoteService'

interface INoteObj{
    title?:string,
    noteIdList?:any,
    isArchived?:boolean,
    isDeleted?:boolean,
    description?:string,
    id?:string
}

function NotesContainer(){
    const [noteList,setNoteList]=useState<Array<INoteObj>>([])
    const getNotes = async () => {
        const a = await getNote();
        const b = a.filter((ele:any)=>!ele.isArchived&&!ele.isDeleted)
        setNoteList(b)
    }
    function updateList(noteObj:INoteObj,action:string){
        if(action==="create"){
            setNoteList([...noteList, noteObj]);
            addNote(noteObj)
        }else if(action==="archive"){
            const v = noteList.findIndex((ele:INoteObj)=>ele.id===noteObj.id)
            noteList.splice(v,1,noteObj)
            setNoteList(prevList => {
                return prevList.filter((ele:INoteObj)=>!ele.isArchived&&!ele.isDeleted)
              })
            addArchive(noteObj)
        }else if(action==="trash"){
            const v = noteList.findIndex((ele:INoteObj)=>ele.id===noteObj.id)
            noteList.splice(v,1,noteObj)
            setNoteList(prevList => {
                return prevList.filter((ele:INoteObj)=>!ele.isArchived&&!ele.isDeleted)
              })
            deleteNote(noteObj)
        }
    }
    useEffect(()=>{getNotes()},[])
    return(<><center className='mt-[80px]'><TakeNote action={updateList} /><br/><div className='grid grid-cols-4 ml-[100px]'>
    {noteList.map((note:any) => (<NoteCard key={note.id} note={note} action={updateList}/>))}
    </div>
    </center></>)
}

export default NotesContainer