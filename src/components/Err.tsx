import React from "react"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
function Err(){
    const navigate = useNavigate()
    const { err } = useParams()
    const [count, setCount] = useState(8)
    useEffect(()=>{
        const timer = setTimeout(()=>{setCount((count) => count - 1)},1000)
        if (count===0) {
            clearTimeout(timer)
            navigate("/")
        }
    },[navigate,count])
    return(<><h1 className="text-3xl mt-20 text-center">{err}, Please Check!</h1><p className="text-3xl mt-20 text-center">Redirecting to Login in {count}s</p></>)
}
export default Err