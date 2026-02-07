import { NavLink } from "react-router"

export default function Navigation() {
    return (
    <>
        <nav style={{
            display: "flex", justifyContent: "center", alignItems: "center", height: "7rem", 
            zIndex: 1000, position: "sticky", top: 110, gap: "10rem", fontSize: '30px',fontFamily: 'Arial, sans-serif', 
            fontWeight: 'bold', padding: '0 2rem'
        }}>
            <div><NavLink to="/" style= {({isActive}) => ({color: isActive ? "#fded09ff" : "lightgray", textDecoration: "none"})}>Home</NavLink></div>
            <div><NavLink to="/ecosistemas" style={({isActive}) => ({color: isActive ? "#fded09ff" : "lightgray", textDecoration: "none" })}>Ecosistemas</NavLink></div>
            <div><NavLink to="/animales" style={({isActive}) => ({color: isActive ? "#fded09ff" : "lightgray", textDecoration: "none" })}>Animales</NavLink></div>
            <div><NavLink to="/usuarios" style={({isActive}) => ({color: isActive ? "#fded09ff" : "lightgray", textDecoration: "none" })}>Usuarios</NavLink></div>
        </nav>
     </>
    );
}