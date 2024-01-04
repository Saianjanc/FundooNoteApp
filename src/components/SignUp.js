import logo from '../assets/signupimg.png'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import '../assets/signup.css'
import { Link } from 'react-router-dom';
function SignUp() {
    return (
        <>
            <div className="signup-outer-ctn">
                <div className="signup-ctn">
                    <div className="main-ctn">
                        <div className="main-txt">
                        <label className="main-title">Fundoo</label>
                        <label className="main-subTitle">Create your Fundoo Account</label>
                        <div className="name-ctn">
                            <TextField className="first-name" variant="outlined" label="First Name" required />
                                <TextField className="last-name" variant="outlined" label="Last Name" required />
                                </div>
                                <div className="username-ctn">
                                    <TextField className="username" variant="outlined" label="Username" required />
                                        <label>You can use letters, numbers & periods</label>
                                </div>
                                <div className="password-ctn">
                                    <div className="password-inner">
                                        <TextField className="password" type="password" label="Password" required />
                                            <TextField className="password" type="password" label="Confirm" required />
                                            </div>
                                            <label>Use 8 or more characters with mix of letters, numbers & symbols</label>
                                    </div>
                                    <div className="signup-btn-ctn">
                                        <Link to="/">Sign in instead</Link>
                                        <Button variant="contained" className="register-btn">Register</Button>
                                    </div>
                                </div>
                        <img src={logo} alt="signupimg" className='signupimg'></img>
                                </div>
                    </div>
                    <div className='bodyfooter'>
                        <div><select className='select'><option>English (United States)</option></select></div>
                        <div><pre>Help      Privacy     Terms</pre></div>
                    </div>
                </div>
        </>)
}

export default SignUp