import { useNavigate } from "react-router-dom"

const NotFound = ()=>{
    const navigate = useNavigate()
    return <>
    <h1 style={{margin:'50px'}}>Not Found</h1>
    <button onClick={()=>navigate('/')}>Back to Home</button>
    </>
}

export default NotFound