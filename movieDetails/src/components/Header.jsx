function Header() {
    return (
        <header className="bg-zinc-900 text-white shadow-lg">
            <div className="max-w-6xl mx-auto px-6 py-6 text-center">
                <h1 className="text-3xl font-bold tracking-wide">
                    🎬 MovieFinder
                </h1>
                <p className="mt-2 text-sm text-zinc-400">
                    Search. Discover. Explore Movies.
                </p>
            </div>
        </header>
    );
}

export default Header;