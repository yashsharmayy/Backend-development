function Navbar() {
    return (
        <nav className="bg-slate-900 shadow-lg border-b border-slate-800">
            <div className="max-w-4xl mx-auto px-6 py-5 flex justify-between items-center">
                <h1 className="text-3xl font-bold text-white">
                    📝 Todo Manager
                </h1>

                <p className="text-slate-400 text-sm">
                    React + Express + MongoDB
                </p>
            </div>
        </nav>
    );
}

export default Navbar;