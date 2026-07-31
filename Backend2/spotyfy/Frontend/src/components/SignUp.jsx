import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const SignUp = () => {
    const [userName, setuserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setrole] = useState('user')
    const navigate = useNavigate()

    const createAccount = async () => {

        const res = await axios.post("http://localhost:3000/user/register", {
            userName, email, password, role
        })


        console.log("login successfuly");
        console.log(res);

        setuserName("")
        setEmail("")
        setPassword("")
        setrole("user")
        await navigate("/login")

    }


    return (
        <div>

            <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-green-400 to-blue-500">
                <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full space-y-6">
                    <h2 className="text-3xl font-bold text-center text-green-600">Create Account</h2>
                    <form onSubmit={
                        (e) => {
                            e.preventDefault()
                            createAccount()


                        }} className="space-y-4">
                        <input type="text" onChange={(e) => setuserName(e.target.value)} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none transition" placeholder="Full Name" />
                        <input type="email" onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none transition" placeholder="Email address" />
                        <input type="password" onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none transition" placeholder="Password" />
                        <div className="mt-4">
                            <label className="block text-green-500 font-semibold mb-3">
                                Login as
                            </label>

                            <div className="flex items-center gap-6">
                                <label className="flex items-center gap-2 cursor-pointer text-gray-500">
                                    <input
                                        type="radio"
                                        name="role"
                                        id="user"
                                        value="user"
                                        onClick={() => setrole("role")}
                                        defaultChecked
                                        className="w-4 h-4 accent-green-500"
                                    />
                                    User
                                </label>

                                <label className="flex items-center gap-2 cursor-pointer text-gray-500">
                                    <input
                                        type="radio"
                                        name="role"
                                        id="artist"
                                        value="artist"
                                        onClick={() => setrole("artist")}
                                        className="w-4 h-4 accent-green-500"
                                    />
                                    Artist
                                </label>
                            </div>
                        </div>

                        <button className="w-full text-white py-3 bg-linear-to-r from-green-500 to-blue-400  font-semibold rounded-lg shadow-md hover:from-green-600 hover:to-blue-500 transition">Sign Up</button>
                    </form>
                    <div className="text-center text-gray-500">Already have an account? <a href="/login" className="text-green-600 font-semibold">Sign in</a></div>
                </div>
            </div>

        </div>
    )
}

export default SignUp