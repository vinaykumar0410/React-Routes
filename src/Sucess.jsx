import { useNavigate } from "react-router-dom"

const Success = ()=>{
    const navigate = useNavigate()
    return <>
    <h1 style={{margin:'1rem'}}>Successfully submitted</h1>
    <button onClick={()=>navigate('/')} style={{padding:'0.3rem',borderRadius:'0.5rem',fontSize:'1rem',cursor:'pointer'}}>Back to home</button>
    </>
}

export default Success