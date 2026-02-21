import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <NavLink to='/' className={navData => {
                return (`${navData.isActive ? 'text-orange-400' : 'text-black'}`)
            }}>Home</NavLink>
            <NavLink to='/about' className={navData => {
                return (`${navData.isActive ? 'text-orange-400' : 'text-black'}`)
            }}>About</NavLink>
            <NavLink to='/Login' className={navData => {
                return (`${navData.isActive ? 'text-orange-400' : 'text-black'}`)
            }}>Login</NavLink>

        </header>
    );
}