import { NavLink } from "react-router-dom";

function Header() {
    const baseClasses =
        "px-4 py-2 rounded-md transition duration-200 font-medium";

    return (
        <header className="bg-gray-100 shadow-sm">
            <nav className="max-w-5xl mx-auto flex justify-between items-center p-4">
                <h1 className="text-xl font-bold text-gray-800">Bank App</h1>

                <ul className="flex gap-4">
                    <li>
                        <NavLink
                            to="/"
                            className={(navData) =>
                                `${baseClasses} ${navData.isActive
                                    ? "bg-amber-200 text-amber-800"
                                    : "text-gray-700 hover:bg-gray-200"
                                }`
                            }
                        >
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="dep"
                            className={(navData) =>
                                `${baseClasses} ${navData.isActive
                                    ? "bg-amber-200 text-amber-800"
                                    : "text-gray-700 hover:bg-gray-200"
                                }`
                            }
                        >
                            Deposit
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="with"
                            className={(navData) =>
                                `${baseClasses} ${navData.isActive
                                    ? "bg-amber-200 text-amber-800"
                                    : "text-gray-700 hover:bg-gray-200"
                                }`
                            }
                        >
                            Withdraw
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="res"
                            className={(navData) =>
                                `${baseClasses} ${navData.isActive
                                    ? "bg-amber-200 text-amber-800"
                                    : "text-gray-700 hover:bg-gray-200"
                                }`
                            }
                        >
                            Reset
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;