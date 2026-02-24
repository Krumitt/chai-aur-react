import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function ViewPaste() {
    const [title, setTitle] = useState("");
    const [value, setValue] = useState("");
    const { pasteId } = useParams();
    const Pastes = useSelector(state => {
        return (state.paste.pastes);
    });
    useEffect(() => {
        const selectedPaste = Pastes.find(ele => {
            return ele.id === pasteId;
        })
        setTitle(selectedPaste?.title);
        setValue(selectedPaste?.content);
    }, [Pastes, pasteId])


    return (
        <div className="min-h-screen bg-gray-50 flex justify-center py-10 px-4">
            <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-8 space-y-6">
                <h1 className="text-2xl font-bold text-gray-800">
                    View your paste
                </h1>

                <div className="flex gap-4">
                    <input
                        type="text"
                        placeholder="Enter title here"
                        value={title} disabled
                        onChange={(e) => setTitle(e.target.value)}
                        className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />


                </div>

                <textarea
                    value={value} disabled
                    placeholder="Enter content here..."
                    onChange={(e) => setValue(e.target.value)}
                    rows={15}
                    className="w-full px-4 py-3 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
            </div>
        </div>
    );
}

export default ViewPaste;