import axios from "axios";

const BASEURL = "https://fundoonotes.incubation.bridgelabz.com/api/user"

const configForUser = () => {
  const header = {headers:{
       "Content-Type": "application/json",
       Authorization: localStorage.getItem("accessToken")
   }
}
   return header
}

export async function userLogin(email:string,password:string,navigate:Function){
    await axios.post(`${BASEURL}/login`,{
            "email":email,
            "password":password
           }).then(res => {
             const usertoken = res.data.id
             localStorage.setItem("accessToken",usertoken)
             localStorage.setItem("userName",res.data.firstName+res.data.lastName)
             localStorage.setItem("userEmail",res.data.email)
             navigate("/notes")
        }).catch(error => {
            const err = error.response.data.error.message
            navigate(`/err/${err}`)
          });
        }

export async function createUser(userObj:object,navigate:Function){
    await axios.post(`${BASEURL}/userSignUp`,userObj).then(res => {
            navigate("/")
        }).catch(error => {
            const err = error.response.data.error.details.messages.email[0]
            navigate(`/err/${err}`)
          });
        }

export async function userLogout(navigate:Function){
    await axios.post(`${BASEURL}/logout`,{},configForUser()).then(res => {
             navigate("/")
        }).catch(error => {
            const err = error.response.data.error.message
            navigate(`/err/${err}`)
          });
        }