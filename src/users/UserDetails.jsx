import { useParams } from 'react-router-dom'
import data from './UserData'
const UserDetails = ()=>{
    const {userId} = useParams()
    const obj = data.find((obj)=>obj.id==userId)
    return <section className='card' style={{maxWidth:'400px',margin:'40px auto'}}>
        <h1>Name : {obj.name}</h1>
        <h2>Username : {obj.username}</h2>
        <p>Email : {obj.email}</p>
    </section>
}

export default UserDetails