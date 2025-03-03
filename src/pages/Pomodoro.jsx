import React, { useState, useEffect } from "react";
import axiosInstance from "../utils/axios"; 
import { useAuth } from "../context/AuthContext";

const PomodoroTimer = () => {
  const WORK_TIME = 25 * 60; // 25 minutes in seconds
  const DEFAULT_BREAK_TIME = 5 * 60; // 5 minutes in seconds

  const [time, setTime] = useState(WORK_TIME);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [cycles, setCycles] = useState(0);
  const [breakTime, setBreakTime] = useState(DEFAULT_BREAK_TIME);
  const [mode, setMode] = useState("work"); // work wla break


  const startSound = new Audio("/sounds/start.mp3");
  const pauseSound = new Audio("/sounds/reset.mp3");
  const timerEndSound = new Audio("/sounds/end.mp3");

  const { user } = useAuth(); 

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            handleTimerEnd();
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const handleTimerEnd = () => {
    timerEndSound.play(); 
    setIsRunning(false);
    if (mode === "work") {
      setMode("break");
      setTime(breakTime);
      setIsBreak(true);
    } else {
      setMode("work");
      setTime(WORK_TIME);
      setIsBreak(false);
      setCycles((prevCycles) => prevCycles + 1);
      saveCycle();
    }
  };

  const saveCycle = async () => {
    if (user) {
      try {
        await axiosInstance.post(
          "/report/cycles", 
          { cycles: cycles + 1 },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
      } catch (err) {
        console.error("Error saving cycle data:", err);
      }
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const adjustBreakTime = (change) => {
    setBreakTime((prev) => Math.max(60, prev + change));
    if (mode === "break") setTime(Math.max(60, breakTime + change));
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-primary text-white">
      <div className="absolute top-40 flex justify-center space-x-8">
        <button
          onClick={() => {
            setMode("work");
            setTime(WORK_TIME);
            setIsRunning(false);
          }}
          className={`px-4 py-2 rounded-md text-lg font-semibold ${
            mode === "work"
              ? "bg-light text-primary"
              : "bg-transparent hover:bg-light hover:text-primary"
          }`}
        >
          Focus
        </button>
        <button
          onClick={() => {
            setMode("break");
            setTime(breakTime);
            setIsRunning(false);
          }}
          className={`px-4 py-2 rounded-md text-lg font-semibold ${
            mode === "break"
              ? "bg-light text-primary"
              : "bg-transparent hover:bg-light hover:text-primary"
          }`}
        >
          Break
        </button>
      </div>

     
      <div className="text-8xl font-bold font-mono mb-10">{formatTime(time)}</div>

   
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => {
            setIsRunning(!isRunning);
            if (!isRunning) {
              startSound.play(); 
            } else {
              pauseSound.play(); 
            }
          }}
          className={`px-6 py-3 rounded-lg text-lg font-semibold transition duration-300 ${
            isRunning
              ? "bg-accent hover:bg-accent-light text-white"
              : "bg-secondary hover:bg-secondary-light text-white"
          }`}
        >
          {isRunning ? "Pause" : "Start"}
        </button>
        <button
          onClick={() => {
            setTime(mode === "work" ? WORK_TIME : breakTime);
            setIsRunning(false);
          }}
          className="px-6 py-3 rounded-lg text-lg font-semibold bg-gray-500 hover:bg-gray-600 text-white transition duration-300"
        >
          Reset
        </button>
      </div>

      {mode === "break" && (
        <div className="flex flex-col items-center">
          <p className="text-lg text-gray-300 mb-2">Break Time: {formatTime(breakTime)}</p>
          <div className="flex space-x-4">
            <button
              onClick={() => adjustBreakTime(60)}
              className="bg-secondary hover:bg-secondary-light text-white px-4 py-2 rounded-md shadow-lg transition duration-300"
            >
              +1 Min
            </button>
            <button
              onClick={() => adjustBreakTime(-60)}
              className="bg-secondary hover:bg-secondary-light text-white px-4 py-2 rounded-md shadow-lg transition duration-300"
            >
              -1 Min
            </button>
          </div>
        </div>
      )}

    
      <p className="mt-8 text-gray-300">
        Completed Cycles: <span className="font-bold">{cycles}</span>
      </p>
    </div>
  );
};

export default PomodoroTimer;
