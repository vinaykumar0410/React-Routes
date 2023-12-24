import { useNavigate } from "react-router-dom"

const Home = ()=>{
    const navigate = useNavigate()
    return <>
    <h1 style={{margin:'1rem'}}>Home</h1>
    <button onClick={()=>navigate('/success')} style={{padding:'0.3rem',borderRadius:'0.5rem',fontSize:'1rem',cursor:'pointer'}}>Submit form</button>
    </>
}

export default Home