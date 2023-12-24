import { Link } from 'react-router-dom'
import data from './UserData'
import './Users.css'
const Users = ()=>{
    return <ul className='container'>
        {
            data.map((obj)=>{
                const {name,username,email,id} = obj
                return <Link to={`/users/${id}`} key={id} className='card'>
                    <h3>Name : {name}</h3>
                    <h3>Username : {username}</h3>
                    <p>Email : {email}</p>
                </Link>
            })
        }
    </ul>
}

export default Users