import React, { useEffect, useState } from 'react'
import { getArchive } from '../utils/NoteService'
import NoteCard from './NoteCard';
import { addArchive, addNote, deleteNote } from '../utils/NoteService'

interface INoteObj{
    title?:string,
    noteIdList?:any,
    isArchived?:boolean,
    isDeleted?:boolean,
    description?:string,
    id?:string
}

function ArchiveContainer() {
    const [noteList,setNoteList]=useState<Array<INoteObj>>([])
    const getNotes = async () => {
        const a = await getArchive();
        setNoteList(a)
    }
    function updateList(noteObj:INoteObj,action:string){
        if(action==="create"){
            setNoteList([...noteList, noteObj]);
            addNote(noteObj)
        }else if(action==="archive"){
            const noteIndex = noteList.findIndex((ele:INoteObj)=>ele.id===noteObj.id)
            noteList.splice(noteIndex,1,noteObj)
            setNoteList(prevList => {
                return prevList.filter((ele:INoteObj)=>ele.isArchived&&!ele.isDeleted)
              })
            addArchive(noteObj)
        }else if(action==="trash"){
            const noteIndex = noteList.findIndex((ele:INoteObj)=>ele.id===noteObj.id)
            noteList.splice(noteIndex,1,noteObj)
            setNoteList(prevList => {
                return prevList.filter((ele:INoteObj)=>ele.isArchived&&!ele.isDeleted)
              })
            deleteNote(noteObj)
        }
    }
    useEffect(()=>{getNotes()},[])
    return(<div className='grid grid-cols-4 ml-[100px] mt-[80px]'>
    {noteList.map((note:any) => (<NoteCard key={note.id} note={note} action={updateList}/>))}
    </div>)
}

export default ArchiveContainer