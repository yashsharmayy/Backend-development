function TodoList({ todos }) {
    if (todos.length === 0) {
        return (
            <div className="bg-slate-800 rounded-2xl p-10 text-center text-slate-400">
                <h2 className="text-5xl mb-4">📋</h2>

                <p className="text-lg">
                    No Todos Yet
                </p>

                <p className="text-sm mt-2">
                    Add your first task above.
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {todos.map((todo) => (
                <div
                    key={todo._id}
                    className="bg-slate-800 border border-slate-700 rounded-xl p-5 flex justify-between items-center hover:scale-[1.02] transition"
                >
                    <div>
                        <h3 className="text-white text-lg">
                            {todo.text}
                        </h3>

                        <p className="text-sm text-green-400 mt-1">
                            Pending
                        </p>
                    </div>

                    <button className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-white">
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
}

export default TodoList;