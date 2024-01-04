import '../assets/login.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
function Login(){
    return(
        <>
        <div className='outer-ctn'>
            <div className='login-ctn'>
                <div className='login-title'>
                <h2>Fundoo</h2>
                <h3>Sign in</h3>
                <p>Use your Fundoo Account</p>
                </div>
                <TextField className="email" variant="outlined" label="Email or Phone" required />
                <div className='ln-pass-ctn'>
                <TextField className="login-password" type="password" label="Password" required />
                <a href='../index.js'>Forgot Password</a>
                </div>
                <div className='btn-ctn'>
                    <Link to="/signup">Create account</Link>
                    <Button variant="contained" className="login-btn">Login</Button>
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