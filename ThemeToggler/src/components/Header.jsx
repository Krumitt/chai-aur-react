import { NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeProvider";
import { useContext } from "react";

export default function Header() {
    const { theme } = useContext(ThemeContext);
    const isDark = theme === "dark";

    return (
        <header
            className={`sticky top-0 z-50 shadow-md transition-colors duration-300 ${isDark ? "bg-gray-900 text-white" : "bg-white text-black"
                }`}
        >
            <div className="max-w-6xl mx-auto px-8 py-5 flex items-center justify-between">

                {/* Logo / Title */}
                <h1 className="text-3xl font-bold tracking-wide">
                    ThemeApp
                </h1>

                {/* Navigation */}
                <nav>
                    <ul className="flex gap-10 text-lg font-medium">

                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `transition-colors duration-200 ${isActive
                                        ? "text-orange-400"
                                        : isDark
                                            ? "text-gray-300 hover:text-white"
                                            : "text-gray-700 hover:text-black"
                                    }`
                                }
                            >
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/p2"
                                className={({ isActive }) =>
                                    `transition-colors duration-200 ${isActive
                                        ? "text-orange-400"
                                        : isDark
                                            ? "text-gray-300 hover:text-white"
                                            : "text-gray-700 hover:text-black"
                                    }`
                                }
                            >
                                Page2
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/p3"
                                className={({ isActive }) =>
                                    `transition-colors duration-200 ${isActive
                                        ? "text-orange-400"
                                        : isDark
                                            ? "text-gray-300 hover:text-white"
                                            : "text-gray-700 hover:text-black"
                                    }`
                                }
                            >
                                Page3
                            </NavLink>
                        </li>

                    </ul>
                </nav>
            </div>
        </header>
    );
}