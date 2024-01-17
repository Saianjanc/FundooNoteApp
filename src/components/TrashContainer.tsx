import React, { useEffect, useState } from 'react'
import { getTrash } from '../utils/NoteService'
import NoteCard from './NoteCard';
import { deleteNote, removeNote } from '../utils/NoteService'

interface INoteObj{
    title?:string,
    noteIdList?:any,
    isArchived?:boolean,
    isDeleted?:boolean,
    description?:string,
    id?:string
}

function TrashContainer() {
    const [noteList,setNoteList]=useState<Array<object>>([])
    const getNotes = async () => {
        const a = await getTrash();
        setNoteList(a)
    }
    function updateList(noteObj:INoteObj,action:string){
        const v = noteList.findIndex((ele:INoteObj)=>ele.id===noteObj.id)
            noteList.splice(v,1,noteObj)
            setNoteList(prevList => {
                return prevList.filter((ele:INoteObj)=>ele.isDeleted)
              })
        if(action==="trash"){
            deleteNote(noteObj)
        }else if(action==="remove"){
            removeNote(noteObj)
        }
    }
    useEffect(()=>{getNotes()},[])
    return(<div className='flex flex-wrap ml-[35px] xl:ml-0'>
    {noteList.map((note:any) => (<NoteCard key={note.id} note={note} action={updateList}/>))}
    </div>)
}

export default TrashContainer