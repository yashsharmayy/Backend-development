import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>

            <nav className="flex items-center justify-between p-4 bg-white shadow-md">
                <div className="flex items-center">
                    <span className="font-bold text-xl text-blue-600">MusiKon</span>
                </div>
                <ul className="hidden md:flex space-x-8">
                    <li><a href="/" className="text-gray-700 hover:text-blue-600">Home</a></li>
                    <li><a href="/album" className="text-gray-700 hover:text-blue-600">Album</a></li>
                    <li><a href="#" className="text-gray-700 hover:text-blue-600">Contact</a></li>
                </ul>
                <div className="flex items-center space-x-2">
                    <Link to="/login">
                        <button className="px-4 py-2 bg-blue-600 text-white rounded">Login</button>
                    </Link>
                    <Link to="/register">
                        <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded">Sign Up</button>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar