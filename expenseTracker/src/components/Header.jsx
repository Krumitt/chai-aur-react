import { NavLink } from "react-router-dom";

function Header() {
    const baseStyle =
        "px-4 py-2 rounded-lg font-medium transition-colors duration-200";

    const activeStyle = "bg-blue-600 text-white";
    const inactiveStyle =
        "text-gray-700 hover:bg-blue-100 hover:text-blue-700";

    return (
        <header className="w-full shadow-md bg-white">
            <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
                <h1 className="text-xl font-bold text-gray-800">
                    Expense Tracker
                </h1>

                <nav className="flex gap-4">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/addTask"
                        className={({ isActive }) =>
                            `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
                        }
                    >
                        Add Expense
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Header;