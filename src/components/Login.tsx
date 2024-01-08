import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios  from 'axios';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
function Login(){
    const navigate = useNavigate()
    const chkUser = () => {
        const email = (document.getElementById('email')as HTMLInputElement).value
        const password = (document.getElementById('password')as HTMLInputElement).value
        axios.post("https://fundoonotes.incubation.bridgelabz.com/api/user/login",{
            "email":email,
            "password":password
           }).then(res => {
            navigate("home")
        }).catch(error => {
            const err = error.response.data.error.message
            navigate(`/err/${err}`)
          });
    }
    return(
        <>
        <div className='flex h-[735px] w-full flex-col items-center justify-center' >
            <div className='w-[30%] h-[465px] flex flex-col items-center gap-[30px] border rounded-[10px] border-solid border-[#7777]'>
                <div className='text-center'>
                <h2 className='text-[26px] font-medium text-[orange] m-[20px]'>Fundoo</h2>
                <h3 className='text-2xl font-medium m-0'>Sign in</h3>
                <p className='mt-[5px]'>Use your Fundoo Account</p>
                </div>
                <form onSubmit={e => {e.preventDefault(); chkUser()}} className="w-full flex flex-col items-center gap-[30px]">
                <TextField className="w-4/5" id="email" variant="outlined" label="Email or Phone" required />
                <div className='w-4/5 flex flex-col'>
                <TextField id='password' className="w-full" type="password" label="Password" required />
                <a href='../index.js'>Forgot Password</a>
                </div>
                <div className='w-4/5 flex justify-between items-center'>
                    <Link className='text-blue-600' to="/signup">Create account</Link>
                    <Button type='submit' variant="contained" className="login-btn">Login</Button>
                </div>
                </form>
            </div>
            <div className='w-[30%] flex text-sm justify-between mt-[15px]'>
                        <div><p>English(United States)</p></div>
                        <div><pre>Help      Privacy     Terms</pre></div>
            </div>
        </div>
        </>
    )
}

export default Login