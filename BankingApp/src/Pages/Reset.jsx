import { useContext } from "react";
import { BankContext } from "../context/BankProvider";

function Reset() {
    const { dispatcher } = useContext(BankContext);


    const handleReset = () => {




        dispatcher({ type: "reset" });


    };

    return (
        <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-4">
            <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md space-y-6">

                <h2 className="text-2xl font-semibold text-gray-800 text-center">
                    Reset Funds
                </h2>



                <button
                    onClick={handleReset}
                    className="w-full bg-amber-500 text-white py-2 rounded-md hover:bg-amber-600 transition duration-200"
                >
                    Reset
                </button>

            </div>
        </div>
    );
}

export default Reset;