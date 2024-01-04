import { Route, Routes } from "react-router-dom";
import Login from './components/Login'
import SignUp from './components/SignUp'

const Nav = () => {
   return (
      <>
         <Routes>
         <Route path = "/" element= {<Login />} />
         <Route path = "signup" element= {<SignUp />} />
      </Routes>
      </>
    )
   }
export default Nav