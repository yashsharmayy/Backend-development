import { useState } from "react";

function TodoForm({ onAdd }) {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!text.trim()) return;

        onAdd(text);

        setText("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex gap-3 my-6"
        >
            <input
                type="text"
                placeholder="Enter Todo..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="flex-1 border rounded p-2 text-white"
            />

            <button
                className="bg-blue-600 text-white px-5 rounded"
            >
                Add
            </button>
        </form>
    );
}

export default TodoForm;