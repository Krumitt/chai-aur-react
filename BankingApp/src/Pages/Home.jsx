import Kobe from "../assets/kobe.jpeg";
import Kukur from "../assets/kukur.jpg";
import { useContext } from "react";
import { BankContext } from "../context/BankProvider";

function Home() {
    const bankContext = useContext(BankContext);

    return (
        <div className="min-h-[85vh] bg-gradient-to-b from-gray-100 to-gray-50 py-12 px-6">
            <div className="max-w-5xl mx-auto space-y-12">

                {/* Hero / Balance Section */}
                <div className="bg-white rounded-2xl shadow-lg p-10 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                        Welcome Back 👋
                    </h1>

                    <p className="text-gray-500 mb-8">
                        Manage your finances with clarity and confidence.
                    </p>

                    <div className="bg-amber-50 border border-amber-200 rounded-xl py-6">
                        <p className="text-sm text-gray-500 mb-1">Available Balance</p>
                        <p className="text-4xl font-bold text-amber-600 tracking-wide">
                            ₹ {bankContext.account.bal}
                        </p>
                    </div>
                </div>

                {/* Feature Section */}
                <div className="grid md:grid-cols-2 gap-8">

                    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
                        <img
                            src={Kobe}
                            alt="Deposits"
                            className="h-52 w-full object-cover"
                        />
                        <div className="p-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">
                                Deposit Funds
                            </h2>
                            <p className="text-gray-500 text-sm">
                                Instantly add money to your account and grow your balance securely.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
                        <img
                            src={Kukur}
                            alt="Withdrawals"
                            className="h-52 w-full object-cover"
                        />
                        <div className="p-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">
                                Withdraw Funds
                            </h2>
                            <p className="text-gray-500 text-sm">
                                Safely withdraw money with built-in balance validation.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Home;