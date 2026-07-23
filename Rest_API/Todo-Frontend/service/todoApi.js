import { response } from "express";

export const addItemToServer = async (task, date) => {
  const response = await fetch("http://localhost:6000/api/todo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ task, date }),
  });
  return response.json();
};
