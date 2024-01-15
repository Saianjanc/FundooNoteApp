import React, { useEffect, useState } from 'react'
import { getArchive, addArchive, deleteNote, changeColor } from '../utils/NoteService'
import NoteCard from './NoteCard';

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
        const b = a.filter((ele:any)=>!ele.isDeleted)
        setNoteList(b)
    }
    function updateList(noteObj:INoteObj,action:string){
            const noteIndex = noteList.findIndex((ele:INoteObj)=>ele.id===noteObj.id)
            noteList.splice(noteIndex,1,noteObj)
            setNoteList(prevList => {
                return prevList.filter((ele:INoteObj)=>ele.isArchived&&!ele.isDeleted)
              })
        if(action==="archive"){
            addArchive(noteObj)
        }else if(action==="trash"){
            deleteNote(noteObj)
        }else if(action==="changeColor"){
            changeColor(noteObj)
        }
    }
    useEffect(()=>{getNotes()},[])
    return(<div className='grid grid-cols-4 ml-[100px] mt-[80px]'>
    {noteList.map((note:any) => (<NoteCard key={note.id} note={note} action={updateList}/>))}
    </div>)
}

export default ArchiveContainer