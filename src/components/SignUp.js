import logo from '../assets/signupimg.png'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import '../assets/signup.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
function SignUp() {
    const navigate = useNavigate()
    const createUser = () => {
        const email = document.getElementById('email').value
        const password = document.getElementById('password').value
        const fname = document.getElementById('fname').value
        const lname = document.getElementById('lname').value
        axios.post("https://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp",{
            "firstName": fname,
            "lastName": lname,
            "service": "advance",
            "email": email,
            "password": password
          }).then(res => {
            console.log(res);
            navigate("/home")
        }).catch(error => {
            navigate("/err")
          });;
    }

    return (
        <>
            <div className="signup-outer-ctn">
                <div className="signup-ctn">
                    <div className="main-ctn">
                        <div className="main-txt">
                        <label className="main-title">Fundoo</label>
                        <label className="main-subTitle">Create your Fundoo Account</label>
                        <div className="name-ctn">
                            <TextField id='fname' className="first-name" variant="outlined" label="First Name" required />
                                <TextField id='lname' className="last-name" variant="outlined" label="Last Name" required />
                                </div>
                                <div className="username-ctn">
                                    <TextField id='email' className="username" variant="outlined" label="Username" required />
                                        <label>You can use letters, numbers & periods</label>
                                </div>
                                <div className="password-ctn">
                                    <div className="password-inner">
                                        <TextField id='password' className="password" type="password" label="Password" required />
                                            <TextField className="password" type="password" label="Confirm" required />
                                            </div>
                                            <label>Use 8 or more characters with mix of letters, numbers & symbols</label>
                                    </div>
                                    <div className="signup-btn-ctn">
                                        <Link to="/">Sign in instead</Link>
                                        <Button onClick={createUser} variant="contained" type='submit' className="register-btn">Register</Button>
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