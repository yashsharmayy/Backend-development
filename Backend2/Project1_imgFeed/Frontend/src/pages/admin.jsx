import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Admin = ({ posts, setPosts }) => {

    const [caption, setCaption] = useState("")
    const [editID, setEditID] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:5000/posts")
            .then((res) => {
                setPosts(res.data.posts)
            })

    }, [])

    const deletepost = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/posts/${id}`)
            setPosts((prevpost) => {
                return prevpost.filter((post) => post._id !== id)
            })
        } catch (error) {
            console.log(error);

        }
    }
    const updatePost = async (id) => {
        try {
            const res = await axios.patch(`http://localhost:5000/posts/${id}`, { caption })
            setPosts((prevpost) => {
                prevpost.map(post => {
                    post._id === id ? res.data.post : post
                })
            })
            setEditID();
            setCaption("");
            navigate("/")
        } catch (error) {
            console.log(error);

        }
    }


    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="max-w-lg mx-auto space-y-8">
                {Array.isArray(posts) && posts.length > 0 ? (posts.map((post) => (
                    <div
                        key={post._id}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
                    >

                        {/* Image */}
                        <img
                            src={post.image}
                            alt={post.caption}
                            className="w-full h-50 object-cover"
                        />


                        {/* Caption */}
                        <div className="px-4 py-3">
                            <span className="font-bold mr-2">
                                yash_sharma
                            </span>
                            {editID === post._id ? (
                                <div>

                                    <input type="text" value={caption} onChange={(e) => setCaption(e.target.value)} className="border p-2 rounded w-full mt-2" />
                                    <button
                                        onClick={() => updatePost(post._id)}
                                        className="inline-flex m-4 text-white bg-green-600 py-2 px-6 rounded text-lg"
                                    >
                                        Save
                                    </button>
                                </div>
                            ) : (
                                <span className="text-gray-700">

                                    {post.caption}
                                </span>

                            )}
                            <div className='mx-auto w-full justify-evenly '>

                                <button onClick={() => setEditID(post._id)} className="inline-flex m-4 text-white bg-[#e09500] border-0 py-2 px-6 focus:outline-none hover:bg-[#b57900] rounded text-lg">
                                    Edit
                                </button>
                                <button onClick={() => deletepost(post._id)} className="inline-flex text-white bg-[#ec1031] border-0 py-2 px-6 focus:outline-none hover:bg-[#b50000] rounded text-lg">
                                    Delete
                                </button>
                            </div>
                        </div>



                    </div>
                ))
                ) : (
                    <div className="text-center mt-20">
                        <h1 className="text-3xl font-bold text-gray-500">
                            No Posts Available
                        </h1>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Admin