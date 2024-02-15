import React, { useEffect, useState } from 'react'
import NoteCard from './NoteCard'
import TakeNote from './TakeNote'
import { addArchive, addNote, changeColor, deleteNote, getNote, updateNote } from '../utils/NoteService'
import { CircularProgress } from '@mui/material'

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
    const [expandNote,setExpandNote] = useState(false)
    const [loaded,setLoaded] = useState(false)
    const getNotes = async () => {
        const a = await getNote(setLoaded);
        const b = a.filter((ele:any)=>!ele.isArchived&&!ele.isDeleted)
        setNoteList(b)
    }
    async function updateList(noteObj:INoteObj,action:string){
        if(action!=="create"){
            const noteIndex = noteList.findIndex((ele:INoteObj)=>ele.id===noteObj.id)
            noteList.splice(noteIndex,1,noteObj)
            setNoteList(prevList => {
                return prevList.filter((ele:INoteObj)=>!ele.isArchived&&!ele.isDeleted)
              })
        }
        if(action==="create"){
            const note = await addNote(noteObj)
            const newNote = {...noteObj,id:note.id,noteIdList:[note.id]}
            setNoteList([...noteList, newNote]);
        }else if(action==="archive"){
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
    return(<div className='flex flex-col items-center'><TakeNote note={{}} expandNote={expandNote} setExpandNote={setExpandNote} action={updateList} edit=''/><br/><div onClick={()=>setExpandNote(false)} className='flex flex-wrap ml-[35px] xl:ml-0'>
    {loaded?noteList.map((note:any) => (<NoteCard key={note.id} note={note} action={updateList}/>)):<CircularProgress/>}
    </div>
    </div>)
}

export default NotesContainer