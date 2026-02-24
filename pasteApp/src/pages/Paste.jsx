import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { removePaste } from "../redux/pasteSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

function Paste() {
    const pastes = useSelector((state) => state.paste.pastes);
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        setFilteredData(
            pastes.filter((paste) =>
                paste.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, pastes]);

    function handleDelete(pasteId) {
        dispatch(removePaste(pasteId));
        toast.success("Paste deleted");
    }

    function handleCopy(content) {
        navigator.clipboard.writeText(content);
        toast("Copied to clipboard");
    }
    function handleShare(pasteId) {
        window.navigator.clipboard.writeText(`${window.location.href}/${pasteId}`);
        toast.success("Share link generated");
    }
    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4 flex justify-center">
            <div className="w-full max-w-4xl space-y-6">

                {/* Header */}
                <h1 className="text-3xl font-bold text-gray-800">
                    Your Pastes
                </h1>

                {/* Search Bar */}
                <input
                    type="text"
                    placeholder="Search by title..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                />

                {/* Paste List */}
                {filteredData.length > 0 ? (
                    <div className="space-y-5">
                        {filteredData.map((paste) => (
                            <div
                                key={paste.id}
                                className="bg-white shadow-md rounded-xl p-6 space-y-4 border hover:shadow-lg transition duration-200"
                            >
                                {/* Title */}
                                <h2 className="text-xl font-semibold text-gray-800">
                                    {paste.title}
                                </h2>

                                {/* Content */}
                                <p className="text-gray-600 whitespace-pre-wrap break-words line-clamp-2">
                                    {paste.content}
                                </p>

                                {/* Buttons */}
                                <div className="flex flex-wrap gap-3 pt-2">

                                    <button className="px-4 py-1.5 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                                        <Link to={`/?pasteId=${paste.id}`}>
                                            Edit
                                        </Link>
                                    </button>

                                    <button className="px-4 py-1.5 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
                                        <Link to={`${paste.id}`}>
                                            View
                                        </Link>
                                    </button>

                                    <button
                                        onClick={() => handleDelete(paste.id)}
                                        className="px-4 py-1.5 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                                    >
                                        Delete
                                    </button>

                                    <button
                                        onClick={() => handleCopy(paste.content)}
                                        className="px-4 py-1.5 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition"
                                    >
                                        Copy
                                    </button>

                                    <button className="px-4 py-1.5 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition" onClick={() => { handleShare(paste.id) }}>
                                        Share
                                    </button>
                                </div>

                                {/* Created At */}
                                <div className="text-sm text-gray-400 pt-2">
                                    Created at:{" "}
                                    {new Date(paste.createdAt).toLocaleString()}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-gray-500 text-center py-10">
                        No pastes found.
                    </div>
                )}
            </div>
        </div>
    );
}

export default Paste;