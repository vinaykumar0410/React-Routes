import { NavLink, Outlet } from "react-router-dom"

const Projects = ()=>{
    return <section style={{textAlign:'center',margin:'50px'}}>
        <NavLink to='/projects/projectone' style={{margin:'20px'}}>ProjectOne</NavLink>
        <NavLink to='/projects/projecttwo' style={{margin:'20px'}}>ProjectTwo</NavLink>
        <Outlet/>
    </section>
}

export default Projects