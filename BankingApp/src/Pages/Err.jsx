import { useNavigate } from "react-router-dom";

function Err() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">

            <img
                src="https://media.tenor.com/U5hmONvZGo8AAAAM/mmt-error-error.gif"
                alt="Error"
                className="w-64 md:w-80 mb-6"
            />

            <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Oops! Something went wrong.
            </h1>

            <p className="text-gray-600 mb-6">
                The page you’re looking for doesn’t exist or an unexpected error occurred.
            </p>

            <button
                onClick={() => navigate(-1)}
                className="px-6 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition duration-200"
            >
                Go Back
            </button>
        </div>
    );
}

export default Err;