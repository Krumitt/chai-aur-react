import { NavLink, Link } from 'react-router-dom';
function Header() {
    return (
        <header>
            <ul>
                <li>
                    <NavLink to='/' end className={navData => {
                        return (
                            `${navData.isActive ? 'text-orange-400' : 'text-black'}`
                        )
                    }}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='github' className={navData => {
                        return (
                            `${navData.isActive ? 'text-orange-400' : 'text-black'}`
                        )
                    }}>
                        GitLog
                    </NavLink>
                </li>
                <li>
                    <NavLink to='photo' className={navData => {
                        return (
                            `${navData.isActive ? 'text-orange-400' : 'text-black'}`
                        )
                    }}>
                        photo
                    </NavLink>
                </li>
            </ul>
        </header>
    )
}

export default Header
