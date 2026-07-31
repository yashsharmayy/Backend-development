import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        try {

            const res = await axios.post("http://localhost:3000/user/login", {
                email, password
            })
            console.log(res);
        } catch (error) {
            console.log(error);

        }

        setPassword("")
        setEmail("")
        // await navigate("/")

    }
    return (
        <div>

            <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-500 to-purple-600">
                <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full space-y-6">
                    <h2 className="text-3xl font-bold text-center text-blue-700">Sign In</h2>
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        handleLogin()
                    }} className="space-y-4">
                        <input type="email" onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition" placeholder="Email address" />
                        <input type="password" onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition" placeholder="Password" />
                        <button className="w-full py-3 bg-linear-to-r from-blue-600 to-purple-500 text-white font-semibold rounded-lg shadow-md hover:from-blue-700 hover:to-purple-600 transition">Login</button>
                    </form>
                    <div className="text-center text-gray-500">Don't have an account? <a href="/register" className="text-blue-600 font-semibold">Sign up</a></div>
                </div>
            </div>
        </div>
    )
}

export default Login