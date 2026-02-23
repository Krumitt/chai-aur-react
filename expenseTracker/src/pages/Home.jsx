import { useContext, useState } from "react";
import { ExpContext } from "../context/ExpenseContext";

function Home() {
    const { expenses, dispatcher } = useContext(ExpContext);
    const [filter, setFilter] = useState('all');
    const filteredExpenses = filter === 'all' ? expenses : expenses.filter(ele => ele.category === filter);
    return (


        <div className="max-w-4xl mx-auto mt-8 px-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
                All Expenses
            </h2>
            <div className="mb-6">
                <label className="mr-3 font-medium text-gray-700">
                    Filter by Category:
                </label>

                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="all">All</option>
                    <option value="food">Food</option>
                    <option value="travel">Travel</option>
                    <option value="bills">Bills</option>
                    <option value="other">Other</option>
                </select>
            </div>

            {expenses.length === 0 ? (
                <div className="bg-gray-100 p-6 rounded-lg text-center text-gray-600">
                    No expenses added yet.
                </div>
            ) : (
                <div className="space-y-4">
                    {filteredExpenses.map((ele) => (

                        <div
                            key={ele.id}
                            className="flex justify-between items-center bg-white shadow-md p-4 rounded-lg"
                        >
                            <div>
                                <p className="text-lg font-semibold text-gray-800">
                                    ₹ {ele.amount}
                                </p>
                                <p className="text-sm text-gray-500 capitalize">
                                    {ele.category}
                                </p>
                            </div>

                            <button
                                onClick={() =>
                                    dispatcher({
                                        type: "del",
                                        payload: { id: ele.id }
                                    })
                                }
                                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;