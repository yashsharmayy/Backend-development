import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <h1 className="text-2xl font-bold text-indigo-600">
                    ImageFeed
                </h1>

                {/* Links */}
                <div className="flex items-center gap-8">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `font-medium transition ${isActive
                                ? "text-indigo-600"
                                : "text-gray-700 hover:text-indigo-600"
                            }`
                        }
                    >
                        Feed
                    </NavLink>

                    <NavLink
                        to="/create_post"
                        className={({ isActive }) =>
                            `font-medium transition ${isActive
                                ? "text-indigo-600"
                                : "text-gray-700 hover:text-indigo-600"
                            }`
                        }
                    >
                        Create Post
                    </NavLink>

                    <NavLink
                        to="/admin"
                        className={({ isActive }) =>
                            `px-4 py-2 rounded-lg font-medium transition ${isActive
                                ? "bg-indigo-600 text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-indigo-600 hover:text-white"
                            }`
                        }
                    >
                        Admin
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;