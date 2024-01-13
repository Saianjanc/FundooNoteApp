import axios from "axios";

const BASEURL = "https://fundoonotes.incubation.bridgelabz.com/api/notes"

const configForAddNotes = {
    headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("accessToken")
    }
}

const configForGetNotes = {
    headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("accessToken")
    }
}

export async function addNote(noteObj:object){
    await axios.post(`${BASEURL}/addNotes`,noteObj,configForAddNotes)}

export async function getNote(){
    let data:any
    await axios.get(`${BASEURL}/getNotesList`,configForGetNotes).then(res => {
        data=res.data.data.data
        })
        return data
        }

export async function getArchive(){
    let data:any
    await axios.get(`${BASEURL}/getArchiveNotesList`,configForGetNotes).then(res => {
        data=res.data.data.data
        })
        return data
        }

export async function addArchive(noteObj:object){
    await axios.post(`${BASEURL}/archiveNotes`,noteObj,configForAddNotes)}

export async function deleteNote(noteObj:object){
    await axios.post(`${BASEURL}/trashNotes`,noteObj,configForAddNotes)}

export async function removeNote(noteObj:object){
    await axios.post(`${BASEURL}/deleteForeverNotes`,noteObj,configForAddNotes)}

export async function getTrash(){
    let data:any
    await axios.get(`${BASEURL}/getTrashNotesList`,configForGetNotes).then(res => {
        data=res.data.data.data
        })
        return data
        }

export async function updateNote(noteObj:object){
    await axios.post(`${BASEURL}/updateNotes`,noteObj,configForAddNotes)}