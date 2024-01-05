import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
function NotFound(){
    const navigate = useNavigate()
    const [count, setCount] = useState(8)
    useEffect(()=>{
        setTimeout(()=>{setCount((count) => count - 1)},1000)
        if (count===0) {
            clearTimeout()
            navigate('/')
        }
    },[navigate, count])
    return(<><h1 className="text-3xl mt-20 text-center">Page Not Found!</h1><p className="text-3xl mt-20 text-center">Redirecting you to Login Page in {count}s</p></>)
}
export default NotFound