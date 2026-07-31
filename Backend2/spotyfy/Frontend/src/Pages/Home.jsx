import React from 'react'
import axios from "axios";

const Home = ({ IsLogin }) => {

    const getAllMusic = async () => {

        try {
            const res = await axios.get("http://localhost:3000/music");

            console.log(res.data);
        } catch (err) {
            console.log(err);
            console.log(err.response.data);
        }
    };
    return (
        <div>
            {
                IsLogin ? (
                    <div className='flex gap-6 flex-wrap p-10 m-10'>

                        <div className="w-52 bg-zinc-900 rounded-xl p-4 shadow-lg hover:scale-105 transition duration-300">
                            <img
                                className="w-full h-40 object-cover rounded-lg"
                                src="https://plus.unsplash.com/premium_vector-1711922642822-695731cfcb4a?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Music Cover"
                            />

                            <div className="mt-3">
                                <h2 className="text-white text-lg font-semibold truncate">
                                    Shape of You
                                </h2>

                                <p className="text-zinc-400 text-sm">
                                    Ed Sheeran
                                </p>

                                <button className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-medium transition">
                                    ▶ Play
                                </button>
                            </div>
                        </div>
                        <div className="w-52 bg-zinc-900 rounded-xl p-4 shadow-lg hover:scale-105 transition duration-300">
                            <img
                                className="w-full h-40 object-cover rounded-lg"
                                src="https://plus.unsplash.com/premium_vector-1711922642822-695731cfcb4a?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Music Cover"
                            />

                            <div className="mt-3">
                                <h2 className="text-white text-lg font-semibold truncate">
                                    Shape of You
                                </h2>

                                <p className="text-zinc-400 text-sm">
                                    Ed Sheeran
                                </p>

                                <button className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-medium transition">
                                    ▶ Play
                                </button>
                            </div>
                        </div>
                        <div className="w-52 bg-zinc-900 rounded-xl p-4 shadow-lg hover:scale-105 transition duration-300">
                            <img
                                className="w-full h-40 object-cover rounded-lg"
                                src="https://plus.unsplash.com/premium_vector-1711922642822-695731cfcb4a?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Music Cover"
                            />

                            <div className="mt-3">
                                <h2 className="text-white text-lg font-semibold truncate">
                                    Shape of You
                                </h2>

                                <p className="text-zinc-400 text-sm">
                                    Ed Sheeran
                                </p>

                                <button className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-medium transition">
                                    ▶ Play
                                </button>
                            </div>
                        </div>
                        <div className="w-52 bg-zinc-900 rounded-xl p-4 shadow-lg hover:scale-105 transition duration-300">
                            <img
                                className="w-full h-40 object-cover rounded-lg"
                                src="https://plus.unsplash.com/premium_vector-1711922642822-695731cfcb4a?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Music Cover"
                            />

                            <div className="mt-3">
                                <h2 className="text-white text-lg font-semibold truncate">
                                    Shape of You
                                </h2>

                                <p className="text-zinc-400 text-sm">
                                    Ed Sheeran
                                </p>

                                <button className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-medium transition">
                                    ▶ Play
                                </button>
                            </div>
                        </div>
                        <div className="w-52 bg-zinc-900 rounded-xl p-4 shadow-lg hover:scale-105 transition duration-300">
                            <img
                                className="w-full h-40 object-cover rounded-lg"
                                src="https://plus.unsplash.com/premium_vector-1711922642822-695731cfcb4a?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Music Cover"
                            />

                            <div className="mt-3">
                                <h2 className="text-white text-lg font-semibold truncate">
                                    Shape of You
                                </h2>

                                <p className="text-zinc-400 text-sm">
                                    Ed Sheeran
                                </p>

                                <button className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-medium transition">
                                    ▶ Play
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <section className="flex flex-col md:flex-row items-center justify-between min-h-[60vh] bg-linear-to-br from-blue-500 to-purple-600 p-12 rounded-2xl shadow-2xl mt-8 max-w-6xl mx-auto">
                            <div className="flex-1 text-center md:text-left text-white">
                                <h1 className="text-5xl font-extrabold mb-4">Welcome to MUsikon</h1>
                                <p className="text-xl mb-6">Build stunning React apps with beautiful, ready-to-use components.</p>
                                <button className="px-8 py-4 bg-white text-blue-700 rounded-lg font-bold shadow hover:bg-blue-50 transition"><a href="/login">Login</a></button>
                            </div>

                        </section>
                    </div>
                )
            }

            {/* <button onClick={getAllMusic} className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]">
                get music
            </button> */}
        </div>
    )
}

export default Home