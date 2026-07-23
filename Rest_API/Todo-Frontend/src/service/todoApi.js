export const addItemToServer = async (task, date) => {
  const response = await fetch("http://localhost:5999/api/todo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ task, date }),
  });

  const serverItem = await response.json();

  return mapServerItemToLocalItem(serverItem);
};

export const getItemToServer = async () => {
  const response = await fetch("http://localhost:5999/api/todo");

  const serverItems = await response.json();

  return serverItems.map(mapServerItemToLocalItem);
};

export const deleteItemOnserver = async (id) => {
  const response = await fetch(`http://localhost:5999/api/todo/${id}`, {
    method: "DELETE",
  });

  const serverItem = await response.json();

  return serverItem._id;
};

const mapServerItemToLocalItem = (serverItem) => {
  return {
    id: serverItem._id,
    name: serverItem.task,
    dueDate: serverItem.date,
    completed: serverItem.completed,
    createdAt: serverItem.createdAt,
    updatedAt: serverItem.updatedAt,
  };
};
