import React, { useState } from "react";

const TodoPage = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, { text: taskInput, completed: false }]);
      setTaskInput("");
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-primary text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-8">To-Do List</h1>

      <div className="w-full max-w-lg px-4">
        <div className="flex mb-6">
          <input
            type="text"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            className="flex-1 px-4 py-2 text-lg bg-light text-primary rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Add a new task"
          />
          <button
            onClick={addTask}
            className="ml-4 px-6 py-2 bg-accent text-white rounded-md shadow-lg hover:bg-accent-light transition duration-300"
          >
            Add
          </button>
        </div>
        <ul className="w-full space-y-4">
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`flex justify-between items-center p-4 bg-light text-primary rounded-md shadow-lg transition duration-300 ${
                task.completed ? "line-through text-gray-500" : ""
              }`}
            >
              <span
                className="cursor-pointer"
                onClick={() => toggleTaskCompletion(index)}
              >
                {task.text}
              </span>
              <button
                onClick={() => deleteTask(index)}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoPage;
