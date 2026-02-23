import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

function Home() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const isDark = theme === "dark";

    return (
        <div
            className={`min-h-screen px-10 py-16 transition-colors duration-300 ${isDark ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
                }`}
        >
            <div className="max-w-4xl mx-auto space-y-8">
                <h1 className="text-5xl font-bold">
                    Welcome to the Theme Playground
                </h1>

                <p className="text-lg leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                </p>

                <p className="text-lg leading-relaxed">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum.
                </p>

                <button
                    onClick={toggleTheme}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${isDark
                        ? "bg-white text-black hover:bg-gray-300"
                        : "bg-black text-white hover:bg-gray-800"
                        }`}
                >
                    Toggle Theme
                </button>
            </div>
        </div>
    );
}

export default Home;