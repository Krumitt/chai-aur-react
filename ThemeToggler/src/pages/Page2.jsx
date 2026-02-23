import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

function Page2() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const isDark = theme === "dark";

    return (
        <div
            className={`min-h-screen flex items-center justify-center px-6 transition-colors duration-300 ${isDark ? "bg-slate-900 text-slate-100" : "bg-slate-100 text-slate-900"
                }`}
        >
            <div
                className={`max-w-2xl w-full p-10 rounded-2xl shadow-xl transition-all duration-300 ${isDark ? "bg-slate-800" : "bg-white"
                    }`}
            >
                <h2 className="text-4xl font-bold mb-6">
                    Explore the Second Page
                </h2>

                <p className="text-lg leading-relaxed mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer nec odio. Praesent libero. Sed cursus ante dapibus
                    diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                </p>

                <p className="text-lg leading-relaxed mb-8">
                    Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed
                    augue semper porta. Mauris massa. Vestibulum lacinia arcu
                    eget nulla.
                </p>

                <button
                    onClick={toggleTheme}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${isDark
                        ? "bg-white text-black hover:bg-gray-300"
                        : "bg-black text-white hover:bg-gray-800"
                        }`}
                >
                    Switch Theme
                </button>
            </div>
        </div>
    );
}

export default Page2;