import React from 'react';
import logo from '../assets/signupimg.png'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import { createUser } from '../utils/UserService';

function SignUp() {
    const navigate = useNavigate()
    const newUser = () => {
        const email = (document.getElementById('email')as HTMLInputElement).value
        const password = (document.getElementById('password')as HTMLInputElement).value
        const fname = (document.getElementById('fname')as HTMLInputElement).value
        const lname = (document.getElementById('lname')as HTMLInputElement).value
        const userObj = {
            "firstName": fname,
            "lastName": lname,
            "service": "advance",
            "email": email,
            "password": password
          }
        localStorage.clear()
        createUser(userObj,navigate)
    }

    function validateInput(){
        const password = (document.getElementById('password')as HTMLInputElement).value
        const confirmpass = (document.getElementById('confirmpass')as HTMLInputElement)
        if(password !== confirmpass.value) {
            confirmpass.setCustomValidity("Passwords Don't Match");
          } else if(password) {
            confirmpass.setCustomValidity("")
            newUser()
          }
      }

    return (
        <>
            <div className="w-full h-[735px] flex flex-col justify-center items-center">
                <div className="flex justify-center">
                    <div className="flex border p-10 rounded-[10px] border-solid border-[#7777]">
                        <form onSubmit={e => e.preventDefault()} className="flex w-[290px] xl:w-[425px] flex-col justify-center gap-[30px]">
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
                                        <Button onClick={validateInput} variant="contained" type='submit'>Register</Button>
                                    </div>
                                </form>
                        <img src={logo} alt="signupimg" className='w-[216px] h-[292px] ml-9 mt-[92px] hidden xl:block'></img>
                                </div>
                    </div>
                    <div className='w-[260px] xl:w-[425px] flex text-sm justify-center xl:gap-[422px] mt-[15px]'>
                        <div><select className='border-[none]'><option>English (United States)</option></select></div>
                        <div><pre>Help      Privacy     Terms</pre></div>
                    </div>
                </div>
        </>)
}

export default SignUp