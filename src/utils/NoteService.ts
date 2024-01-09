import axios from "axios";

const BASEURL = "https://fundoonotes.incubation.bridgelabz.com/api/notes"

const configForAddNotes = {
    headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.getItem("accessToken")
    }
}

const configForGetNotes = {
    headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("accessToken")
    }
}

export async function AddNote(noteObj:object){
    await axios.post(`${BASEURL}/addNotes`,noteObj,configForAddNotes).then(res => {
        })
        }

export async function GetNote(){
    let data:any
    await axios.get(`${BASEURL}/getNotesList`,configForGetNotes).then(res => {
        data=res.data.data.data
        })
        return data
        }