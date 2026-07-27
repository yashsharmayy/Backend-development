import { useState } from "react";

const CreatePost = () => {
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState("");
    const [caption, setCaption] = useState("");

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            setImage(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("image", image);
        formData.append("caption", caption);

        console.log("Submitting...", image, caption);

        // axios.post("http://localhost:6000/create_post", formData)
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-5">
            <div className="w-full max-w-lg backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl shadow-2xl p-8">
                <h1 className="text-4xl font-bold text-center text-white mb-2">
                    Create Post
                </h1>

                <p className="text-center text-white/80 mb-8">
                    Share your beautiful moments with everyone.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Image Upload */}
                    <div>
                        <label className="block text-white font-semibold mb-2">
                            Upload Image
                        </label>

                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="w-full text-white
                            file:bg-white
                            file:text-indigo-600
                            file:px-5
                            file:py-2
                            file:rounded-xl
                            file:border-0
                            file:font-semibold
                            file:cursor-pointer
                            cursor-pointer"
                        />
                    </div>

                    {/* Preview */}
                    {preview && (
                        <div className="flex justify-center">
                            <img
                                src={preview}
                                alt="Preview"
                                className="w-full h-72 object-cover rounded-2xl border-4 border-white shadow-xl"
                            />
                        </div>
                    )}

                    {/* Caption */}
                    <div>
                        <label className="block text-white font-semibold mb-2">
                            Caption
                        </label>

                        <textarea
                            rows="4"
                            placeholder="Write something amazing..."
                            value={caption}
                            onChange={(e) => setCaption(e.target.value)}
                            className="w-full rounded-xl p-4 bg-white/30 border border-white/40 text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-white resize-none"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-4 rounded-xl bg-white text-indigo-600 font-bold text-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
                    >
                        🚀 Create Post
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreatePost;