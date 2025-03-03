import React, { useState, useEffect } from "react";
import axiosInstance from "../utils/axios"; 
import { useAuth } from "../context/AuthContext";

const ReportPage = () => {
  const { user } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [pendingTasks, setPendingTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axiosInstance.get("/tasks", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, 
          },
        });

        setTasks(response.data);

        const completed = response.data.filter((task) => task.completed);
        const pending = response.data.filter((task) => !task.completed);

        setCompletedTasks(completed);
        setPendingTasks(pending);
      } catch (err) {
        console.error("Error fetching tasks:", err);
      }
    };

    if (user) {
      fetchTasks();
    }
  }, [user]);

  const totalTasks = tasks.length;
  const completedPercentage = totalTasks ? Math.round((completedTasks.length / totalTasks) * 100) : 0;

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-primary text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-8">Tasks Report</h1>

     
      <div className="w-full max-w-lg px-4 mb-6">
        <div className="bg-light p-6 rounded-md shadow-lg text-primary">
          <h2 className="text-2xl font-semibold mb-4">Task Summary</h2>
          <p>Total Tasks: {totalTasks}</p>
          <p>Completed Tasks: {completedTasks.length} ({completedPercentage}%)</p>
          <p>Pending Tasks: {pendingTasks.length}</p>
        </div>
      </div>

      <div className="w-full max-w-lg px-4">
      
        <h2 className="text-xl font-semibold mb-4">Completed Tasks</h2>
        <ul className="space-y-4 mb-6">
          {completedTasks.map((task) => (
            <li
              key={task._id}
              className="p-4 bg-light text-primary rounded-md shadow-lg"
            >
              <h3 className="text-lg font-semibold">{task.title}</h3>
              <p>{task.description}</p>
              <p className="text-xs text-gray-400">Due Date: {task.dueDate}</p>
            </li>
          ))}
        </ul>

        <h2 className="text-xl font-semibold mb-4">Pending Tasks</h2>
        <ul className="space-y-4">
          {pendingTasks.map((task) => (
            <li
              key={task._id}
              className="p-4 bg-light text-primary rounded-md shadow-lg"
            >
              <h3 className="text-lg font-semibold">{task.title}</h3>
              <p>{task.description}</p>
              <p className="text-xs text-gray-400">Due Date: {task.dueDate}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReportPage;
