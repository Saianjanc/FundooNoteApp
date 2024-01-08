import React from 'react'
import NoteCard from './NoteCard'
import TakeNote from './TakeNote'
function Notes(){
    return(<><h1 className="text-3xl mt-20 text-center">Welcome to Fundoo Note Home Page!</h1><br/><center><TakeNote/><br/><NoteCard/></center></>)
}

export default Notes