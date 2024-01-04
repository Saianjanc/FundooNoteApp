import '../assets/login.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios  from 'axios';
import { Link, useNavigate } from 'react-router-dom';
function Login(){
    const navigate = useNavigate()
    const chkUser = () => {
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value
        axios.post("https://fundoonotes.incubation.bridgelabz.com/api/user/login",{
            "email":email,
            "password":password
           }).then(res => {
            console.log(res);
            navigate("home")
        });
    }
    return(
        <>
        <div className='outer-ctn'>
            <div className='login-ctn'>
                <div className='login-title'>
                <h2>Fundoo</h2>
                <h3>Sign in</h3>
                <p>Use your Fundoo Account</p>
                </div>
                <TextField className="email" id="email" variant="outlined" label="Email or Phone" required />
                <div className='ln-pass-ctn'>
                <TextField id='password' className="login-password" type="password" label="Password" required />
                <a href='../index.js'>Forgot Password</a>
                </div>
                <div className='btn-ctn'>
                    <Link to="/signup">Create account</Link>
                    <Button onClick={chkUser} variant="contained" className="login-btn">Login</Button>
                </div>
            </div>
            <div className='login-bodyfooter'>
                        <div><p>English(United States)</p></div>
                        <div><pre>Help      Privacy     Terms</pre></div>
            </div>
        </div>
        </>
    )
}

export default Login