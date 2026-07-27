import React, { useState } from "react";
import { Heart, MessageCircle, Send, Bookmark } from "lucide-react";
import axios from "axios";
import { useEffect } from "react";

const Feed = ({ posts, setPosts }) => {
    // {
    //     _id: "1",
    //     image:
    //         "https://images.unsplash.com/photo-1777400589332-fbaccdfc8500?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0",
    //     caption: "Beautiful scenery 🌄",
    // },
    // {
    //     _id: "2",
    //     image:
    //         "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
    //     caption: "Nature is the best therapy 🍃",
    // },

    useEffect(() => {

        axios.get("http://localhost:5000/posts")
            .then((res) => {
                setPosts(res.data.posts)
            })

    }, [])


    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="max-w-lg mx-auto space-y-8">
                {Array.isArray(posts) && posts.length > 0 ? (posts.map((post) => (
                    <div
                        key={post._id}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-4">
                            <div className="flex items-center gap-3">
                                <img
                                    src="https://i.pravatar.cc/100"
                                    alt="profile"
                                    className="w-12 h-12 rounded-full border-2 border-pink-500"
                                />

                                <div>
                                    <h2 className="font-semibold text-gray-800">
                                        Yash Sharma
                                    </h2>
                                    <p className="text-sm text-gray-500">
                                        2 hours ago
                                    </p>
                                </div>
                            </div>

                            <button className="text-xl">⋮</button>
                        </div>

                        {/* Image */}
                        <img
                            src={post.image}
                            alt={post.caption}
                            className="w-full h-112 object-cover"
                        />

                        {/* Actions */}
                        <div className="flex justify-between items-center p-4">
                            <div className="flex gap-5">
                                <Heart className="cursor-pointer hover:text-red-500 transition" />
                                <MessageCircle className="cursor-pointer hover:text-blue-500 transition" />
                                <Send className="cursor-pointer hover:text-green-500 transition" />
                            </div>

                            <Bookmark className="cursor-pointer hover:text-yellow-500 transition" />
                        </div>

                        {/* Likes */}
                        <div className="px-4 font-semibold text-gray-800">
                            ❤️ 2,431 likes
                        </div>

                        {/* Caption */}
                        <div className="px-4 py-3">
                            <span className="font-bold mr-2">
                                yash_sharma
                            </span>
                            <span className="text-gray-700">
                                {post.caption}
                            </span>
                        </div>

                        {/* Comment */}
                        <div className="px-4 pb-4">
                            <input
                                type="text"
                                placeholder="Add a comment..."
                                className="w-full border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
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
    );
};

export default Feed;