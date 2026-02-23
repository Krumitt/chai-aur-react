import { ExpContext } from "../context/ExpenseContext";
import { useContext } from "react";
function AddTask() {
    const { dispatcher } = useContext(ExpContext);
    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        dispatcher({
            type: 'add', payload: {
                id: crypto.randomUUID(),
                amount: Number(data.amount),
                category: data.category
            }
        })
        e.target.reset();
    }
    return (
        <div className="max-w-xl mx-auto mt-10 px-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Add Expense
            </h2>

            <form

                className="bg-white shadow-md rounded-lg p-6 space-y-6"
                onSubmit={handleSubmit}
            >
                {/* Amount Field */}
                <div className="flex flex-col">
                    <label className="mb-2 font-medium text-gray-700">
                        Amount
                    </label>
                    <input
                        type="number"
                        name="amount"
                        required
                        min="1"
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter amount"
                    />
                </div>

                {/* Category Field */}
                <div className="flex flex-col">
                    <label className="mb-2 font-medium text-gray-700">
                        Category
                    </label>
                    <select
                        name="category"
                        required
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        defaultValue=''
                    >
                        <option value=''>Select category</option>
                        <option value="food">Food</option>
                        <option value="travel">Travel</option>
                        <option value="bills">Bills</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition"
                >
                    Add Expense
                </button>
            </form>
        </div>
    );
}

export default AddTask;