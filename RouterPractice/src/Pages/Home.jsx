function Home() {
    return (
        <div className="bg-gray-50 min-h-screen">

            {/* Hero Section */}
            <section className="max-w-6xl mx-auto px-6 py-20 text-center">
                <h1 className="text-5xl font-bold text-gray-800 mb-6">
                    Welcome to My React Router Practice App
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Exploring layouts, nested routing, and modern UI design using React and Tailwind CSS.
                </p>
            </section>

            {/* First Image Section */}
            <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <img
                        src="https://i.pinimg.com/736x/6a/07/c2/6a07c2b1994408f02d91a1f37c6056ac.jpg"
                        alt="Creative Visual"
                        className="rounded-2xl shadow-xl hover:scale-105 transition duration-500"
                    />
                </div>

                <div>
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                        Clean & Modern UI
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Build scalable applications using structured layouts and reusable components.
                        This design demonstrates responsive grids, smooth hover effects, and proper spacing.
                    </p>
                </div>
            </section>

            {/* Second Image Section */}
            <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                        Powerful Routing Architecture
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Using createBrowserRouter, layouts, and nested routes allows you to
                        build professional-level routing systems that scale as your app grows.
                    </p>
                </div>

                <div className="order-1 md:order-2">
                    <img
                        src="https://i.pinimg.com/736x/0a/4a/89/0a4a8931e752d1aacc6a2cc7a5c74c84.jpg"
                        alt="Modern Workspace"
                        className="rounded-2xl shadow-xl hover:scale-105 transition duration-500"
                    />
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-white py-16 text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                    Ready to Explore More?
                </h3>
                <button className="px-8 py-3 bg-orange-600 text-white rounded-full shadow-md hover:bg-orange-700 transition duration-300">
                    Get Started
                </button>
            </section>

        </div>
    );
}

export default Home;
