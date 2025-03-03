import React, { useState, useEffect } from "react";
import axiosInstance from "../utils/axios";
import { useAuth } from "../context/AuthContext";

const TasksPage = () => {
  const { user } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axiosInstance.get("/tasks", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        console.log("Fetched tasks:", response.data);
        setTasks(response.data);
      } catch (err) {
        console.error("Error fetching tasks:", err);
      }
    };

    if (user) {
      fetchTasks();
    }
  }, [user]);

  const addTask = async () => {
    if (taskInput.trim() && taskDescription.trim() && dueDate.trim()) {
      try {
        const response = await axiosInstance.post(
          "/tasks",
          {
            title: taskInput,
            description: taskDescription,
            dueDate: dueDate,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        const newTask = response.data.task; // Ensure we get the task object
        if (!newTask || !newTask.id) {
          console.error("Error: Task ID is missing.");
          return;
        }

        setTasks((prevTasks) => [...prevTasks, newTask]); // Correctly updating the state
        setTaskInput("");
        setTaskDescription("");
        setDueDate("");
      } catch (err) {
        console.error("Error adding task:", err);
      }
    }
  };

  const toggleTaskCompletion = async (taskId) => {
    if (!taskId) {
      console.error("Error: taskId is undefined.");
      return;
    }

    try {
      const task = tasks.find((t) => t.id === taskId); // Changed _id to id
      if (!task) {
        console.error("Error: Task not found.");
        return;
      }

      const updatedTask = { ...task, completed: !task.completed };

      const response = await axiosInstance.put(
        `/tasks/${taskId}`,
        updatedTask,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setTasks(tasks.map((t) => (t.id === taskId ? { ...t, completed: !t.completed } : t))); // Corrected state update
    } catch (err) {
      console.error("Error updating task completion:", err);
    }
  };

  const deleteTask = async (taskId) => {
    if (!taskId) {
      console.error("Error: taskId is undefined.");
      return;
    }

    try {
      await axiosInstance.delete(`/tasks/${taskId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId)); // Corrected state update
    } catch (err) {
      console.error("Error deleting task:", err);
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-primary text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-8">Tasks</h1>

      <div className="w-full max-w-lg px-4">
        <div className="flex flex-col mb-6">
          <input
            type="text"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            className="mb-4 px-4 py-2 text-lg bg-light text-primary rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Enter your task title"
          />
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="mb-4 px-4 py-2 text-lg bg-light text-primary rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Enter task description"
          />
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="mb-4 px-4 py-2 text-lg bg-light text-primary rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <button
            onClick={addTask}
            className="px-6 py-2 bg-accent text-white rounded-md shadow-lg hover:bg-accent-light transition duration-300"
          >
            Add Task
          </button>
        </div>

        <ul className="w-full space-y-4">
          {tasks.map((task) =>
            task?.id ? (
              <li
                key={task.id} // Ensuring key is always `id`
                className={`flex flex-col justify-between items-start p-4 bg-light text-primary rounded-md shadow-lg transition duration-300 ${
                  task.completed ? "line-through text-gray-500" : ""
                }`}
              >
                <div className="flex justify-between w-full items-center">
                  <span
                    className="cursor-pointer text-lg font-semibold"
                    onClick={() => toggleTaskCompletion(task.id)} // Changed _id to id
                  >
                    {task.title}
                  </span>
                  <button
                    onClick={() => deleteTask(task.id)} // Changed _id to id
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
                  >
                    Delete
                  </button>
                </div>

                <p className="text-sm mt-2">{task.description}</p>
                <p className="text-xs text-gray-400 mt-1">Due Date: {task.dueDate}</p>
                <p className="text-xs mt-1">Status: {task.completed ? "Completed" : "Pending"}</p>
              </li>
            ) : null
          )}
        </ul>
      </div>
    </div>
  );
};

export default TasksPage;
