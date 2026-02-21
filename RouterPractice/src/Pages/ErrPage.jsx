import { Link } from "react-router-dom";

export default function ErrPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6">

            <h1 className="text-8xl font-extrabold text-orange-500 mb-6">
                404
            </h1>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                Oops! Page Not Found
            </h2>

            <p className="text-gray-600 text-center max-w-md mb-8">
                The page you are looking for does not exist or has been moved.
                Please check the URL or return to the homepage.
            </p>

            <Link
                to="/"
                className="px-6 py-3 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 transition duration-300"
            >
                Go Back Home
            </Link>

        </div>
    );
}
