import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addPaste, updatePaste } from "../redux/pasteSlice";

function Home() {
    const [title, setTitle] = useState("");
    const [value, setValue] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();
    const pasteId = searchParams.get("pasteId");
    const dispatch = useDispatch();
    const Pastes = useSelector(state => {
        return (state.paste.pastes);
    });
    function createPaste() {


        const paste = {
            title,
            content: value,
            id: pasteId || Date.now().toString(),
            createdAt: new Date().toISOString(),
        };

        if (pasteId) {
            dispatch(updatePaste(paste));
        } else {
            dispatch(addPaste(paste));
        }

        setTitle("");
        setValue("");
        setSearchParams({});
    }
    useEffect(() => {
        if (pasteId) {
            const selectedPaste = Pastes.find(paste => {
                return paste.id === pasteId;
            })
            setTitle(selectedPaste.title);
            setValue(selectedPaste.content);
        }
    }, [pasteId, Pastes]);
    return (
        <div className="min-h-screen bg-gray-50 flex justify-center py-10 px-4">
            <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-8 space-y-6">
                <h1 className="text-2xl font-bold text-gray-800">
                    {pasteId ? "Update Paste" : "Create New Paste"}
                </h1>

                <div className="flex gap-4">
                    <input
                        type="text"
                        placeholder="Enter title here"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />

                    <button
                        onClick={createPaste}
                        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md transition duration-200"
                    >
                        {pasteId ? "Update" : "Create"}
                    </button>
                </div>

                <textarea
                    value={value}
                    placeholder="Enter content here..."
                    onChange={(e) => setValue(e.target.value)}
                    rows={15}
                    className="w-full px-4 py-3 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
            </div>
        </div>
    );
}

export default Home;