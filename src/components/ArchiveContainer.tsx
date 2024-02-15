import React, { useEffect, useState } from 'react'
import { getArchive, addArchive, deleteNote, changeColor, updateNote } from '../utils/NoteService'
import NoteCard from './NoteCard';
import { CircularProgress } from '@mui/material';

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
    const [loaded,setLoaded] = useState(false)
    const getNotes = async () => {
        const a = await getArchive(setLoaded);
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
        }else if(action==="update"){
            updateNote(noteObj)
        }else if(action==="changeColor"){
            changeColor(noteObj)
        }
    }
    useEffect(()=>{getNotes()},[])
    return(<div className='flex flex-wrap ml-[35px] xl:ml-0'>
    {loaded?noteList.map((note:any) => (<NoteCard key={note.id} note={note} action={updateList}/>)):<CircularProgress/>}
    </div>)
}

export default ArchiveContainer