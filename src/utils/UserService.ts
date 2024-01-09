import axios from "axios";

const BASEURL = "https://fundoonotes.incubation.bridgelabz.com/api/user"

export async function ChkUser(email:string,password:string,navigate:Function){
    await axios.post(`${BASEURL}/login`,{
            "email":email,
            "password":password
           }).then(res => {
            navigate("notes")
            const usertoken = res.data.id
            localStorage.setItem("accessToken",usertoken)
        }).catch(error => {
            const err = error.response.data.error.message
            navigate(`/err/${err}`)
          });
        }

export async function CreateUser(fname:string,lname:string,email:string,password:string,navigate:Function){
    await axios.post(`${BASEURL}/userSignUp`,{
            "firstName": fname,
            "lastName": lname,
            "service": "advance",
            "email": email,
            "password": password
          }).then(res => {
            navigate("/notes")
        }).catch(error => {
            const err = error.response.data.error.details.messages.email[0]
            navigate(`/err/${err}`)
          });
        }