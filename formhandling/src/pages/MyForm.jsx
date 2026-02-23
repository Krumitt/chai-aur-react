import { Form } from "react-router-dom";

function MyForm() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center mb-6">
                    User Registration
                </h2>

                <Form method="POST" action="." className="space-y-5">

                    {/* Username */}
                    <div className="flex flex-col">
                        <label
                            htmlFor="username"
                            className="mb-1 text-sm font-medium text-gray-700"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            required
                            minLength="3"
                            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Password */}
                    <div className="flex flex-col">
                        <label
                            htmlFor="password"
                            className="mb-1 text-sm font-medium text-gray-700"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            required
                            minLength="6"
                            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Date of Birth */}
                    <div className="flex flex-col">
                        <label
                            htmlFor="dob"
                            className="mb-1 text-sm font-medium text-gray-700"
                        >
                            Date of Birth
                        </label>
                        <input
                            type="date"
                            name="dob"
                            id="dob"
                            required
                            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                    >
                        Submit
                    </button>

                </Form>
            </div>
        </div>
    );
}

export default MyForm;