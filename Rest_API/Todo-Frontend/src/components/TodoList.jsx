function TodoList({ todos, onDelete }) {
    if (todos.length === 0) {
        return (
            <div className="bg-slate-800 rounded-2xl p-10 text-center text-slate-400">
                <h2 className="text-5xl mb-4">📝</h2>
                <p className="text-xl font-semibold">No Tasks Yet</p>
                <p className="text-sm mt-2">Add your first task above.</p>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {todos.map((todo) => (
                <div
                    key={todo.id}
                    className="bg-slate-800 border border-slate-700 rounded-xl p-5 shadow-lg hover:shadow-blue-500/20 transition"
                >
                    <div className="flex justify-between items-start">
                        <div>
                            <h2 className="text-xl font-semibold text-white">
                                {todo.name}
                            </h2>

                            <p className="text-sm text-gray-400 mt-2">
                                📅 {todo.createdAt}
                            </p>
                        </div>

                        <button
                            onClick={() => onDelete(todo.id)}
                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TodoList;