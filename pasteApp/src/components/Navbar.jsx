import { NavLink } from "react-router-dom";

export default function Navbar() {
    const baseStyle =
        "px-4 py-2 rounded-md font-medium transition-colors duration-200";

    return (
        <nav className="w-full bg-white shadow-md px-6 py-4 flex gap-6 items-center">
            <NavLink
                to="/"
                className={({ isActive }) =>
                    `${baseStyle} ${isActive
                        ? "text-orange-500 bg-orange-50"
                        : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                    }`
                }
            >
                Home
            </NavLink>

            <NavLink
                to="/pastes"
                className={({ isActive }) =>
                    `${baseStyle} ${isActive
                        ? "text-orange-500 bg-orange-50"
                        : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                    }`
                }
            >
                Pastes
            </NavLink>
        </nav>
    );
}