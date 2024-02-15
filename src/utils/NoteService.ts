import axios from "axios";

const BASEURL = "https://fundoonotes.incubation.bridgelabz.com/api/notes"

const configForNotes = () => { 
   const accessToken = localStorage.getItem("accessToken")
   const header = {headers:{
        "Content-Type": "application/json",
        Authorization: accessToken
    }
}
    return header
}

export async function addNote(noteObj:object){
    let data:any
    await axios.post(`${BASEURL}/addNotes`,noteObj,configForNotes()).then(res => {
        data=res.data.status.details
        })
        return data
    }

export async function getNote(setLoaded:Function){
    let data:any
    await axios.get(`${BASEURL}/getNotesList`,configForNotes()).then(res => {
        data=res.data.data.data
        })
        setLoaded(true)
        return data
    }

export async function getArchive(setLoaded:Function){
    let data:any
    await axios.get(`${BASEURL}/getArchiveNotesList`,configForNotes()).then(res => {
        data=res.data.data.data
        })
        setLoaded(true)
        return data
        }

export async function addArchive(noteObj:object){
    await axios.post(`${BASEURL}/archiveNotes`,noteObj,configForNotes())}

export async function deleteNote(noteObj:object){
    await axios.post(`${BASEURL}/trashNotes`,noteObj,configForNotes())}

export async function removeNote(noteObj:object){
    await axios.post(`${BASEURL}/deleteForeverNotes`,noteObj,configForNotes())}

export async function getTrash(){
    let data:any
    await axios.get(`${BASEURL}/getTrashNotesList`,configForNotes()).then(res => {
        data=res.data.data.data
        })
        return data
        }

export async function updateNote(noteObj:object){
    await axios.post(`${BASEURL}/updateNotes`,noteObj,configForNotes())}

export async function changeColor(noteObj:object){
    await axios.post(`${BASEURL}/changesColorNotes`,noteObj,configForNotes())}