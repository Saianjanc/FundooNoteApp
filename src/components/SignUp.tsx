import React from 'react';
import logo from '../assets/signupimg.png'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
    const navigate = useNavigate()
    const createUser = () => {
        const email = (document.getElementById('email')as HTMLInputElement).value
        const password = (document.getElementById('password')as HTMLInputElement).value
        const fname = (document.getElementById('fname')as HTMLInputElement).value
        const lname = (document.getElementById('lname')as HTMLInputElement).value
        axios.post("https://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp",{
            "firstName": fname,
            "lastName": lname,
            "service": "advance",
            "email": email,
            "password": password
          }).then(res => {
            navigate("/home")
        }).catch(error => {
            const err = error.response.data.error.details.messages.email[0]
            navigate(`/err/${err}`)
          });
    }

    function validateInput(){
        const password = (document.getElementById('password')as HTMLInputElement).value
        const confirmpass = (document.getElementById('confirmpass')as HTMLInputElement)
        if(password !== confirmpass.value) {
            confirmpass.setCustomValidity("Passwords Don't Match");
          } else {
            confirmpass.setCustomValidity("")
            createUser()
          }
      }

    return (
        <>
            <div className="w-full h-[735px] flex flex-col justify-center items-center">
                <div className="flex justify-center">
                    <div className="flex border p-10 rounded-[10px] border-solid border-[#7777]">
                        <form onSubmit={e => e.preventDefault()} className="flex w-3/5 flex-col justify-center gap-[30px]">
                        <label className="text-3xl text-[orange]">Fundoo</label>
                        <label className="text-2xl">Create your Fundoo Account</label>
                        <div className="flex justify-between">
                            <TextField id='fname' className="w-[47%]" variant="outlined" label="First Name" required />
                                <TextField id='lname' className="w-[47%]" variant="outlined" label="Last Name" required />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <TextField id='email' className="username" variant="outlined" label="Username" required />
                                        <label>You can use letters, numbers & periods</label>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex justify-between">
                                        <TextField id='password' className="w-[47%]" type="password" label="Password" required />
                                        <TextField id='confirmpass' className="w-[47%]" type="password" label="Confirm" required />
                                            </div>
                                            <label>Use 8 or more characters with mix of letters, numbers & symbols</label>
                                    </div>
                                    <div className="w-full flex justify-between items-center">
                                        <Link className='text-blue-600' to="/">Sign in instead</Link>
                                        <Button onClick={validateInput} variant="contained" type='submit' className="register-btn">Register</Button>
                                    </div>
                                </form>
                        <img src={logo} alt="signupimg" className='w-[216px] h-[292px] ml-9 mt-[92px]'></img>
                                </div>
                    </div>
                    <div className='w-[51.5%] flex text-sm justify-center gap-[422px] mt-[15px]'>
                        <div><select className='border-[none]'><option>English (United States)</option></select></div>
                        <div><pre>Help      Privacy     Terms</pre></div>
                    </div>
                </div>
        </>)
}

export default SignUp