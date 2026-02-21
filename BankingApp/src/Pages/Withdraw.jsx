import { useContext, useRef } from "react";
import { BankContext } from "../context/BankProvider";

function Withdraw() {
    const { dispatcher } = useContext(BankContext);
    const userInputRef = useRef(null);

    const handleWithdraw = () => {
        const value = userInputRef.current.value;

        if (!value || Number(value) <= 0) return;

        dispatcher({ type: "withdraw", amt: value });

        userInputRef.current.value = "";
    };

    return (
        <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-4">
            <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md space-y-6">

                <h2 className="text-2xl font-semibold text-gray-800 text-center">
                    Withdraw Funds
                </h2>

                <input
                    type="number"
                    placeholder="Enter amount"
                    ref={userInputRef}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />

                <button
                    onClick={handleWithdraw}
                    className="w-full bg-amber-500 text-white py-2 rounded-md hover:bg-amber-600 transition duration-200"
                >
                    Withdraw
                </button>

            </div>
        </div>
    );
}

export default Withdraw;