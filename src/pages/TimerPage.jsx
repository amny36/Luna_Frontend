import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const TimerPage = () => {
  const [time, setTime] = useState(0); // wa9t in seconds
  const [isRunning, setIsRunning] = useState(false);
  const startSound = new Audio("/sounds/start.mp3");
  const pauseSound = new Audio("/sounds/start.mp3");
  const resetSound = new Audio("/sounds/reset.mp3");
  const endSound = new Audio("/sounds/reset.mp3");
  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isRunning && time > 0) {
      pauseSound.play();
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  useEffect(() => {
    if (time === 0 && isRunning) {
      endSound.play();
    }
  }, [time, isRunning]);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleStart = () => {
    setIsRunning(true);
    startSound.play(); 
  };

  const handlePause = () => {
    setIsRunning(false);
    pauseSound.play(); 
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
    resetSound.play(); 
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-primary text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-8">
        Focus Timer
      </h1>
      <div className="text-6xl font-mono bg-light text-primary px-10 py-4 rounded-lg shadow-lg mb-6">
        {formatTime(time)}
      </div>
      <div className="flex space-x-4">
        <button
          onClick={isRunning ? handlePause : handleStart}
          className={`px-6 py-3 rounded-md text-lg shadow-lg transition duration-300 ${
            isRunning
              ? "bg-accent hover:bg-accent-light text-white"
              : "bg-secondary hover:bg-secondary-light text-white"
          }`}
        >
          {isRunning ? "Pause" : "Start"}
        </button>
        <button
          onClick={handleReset}
          className="bg-light hover:bg-gray-300 text-primary px-6 py-3 rounded-md text-lg shadow-lg transition duration-300"
        >
          Reset
        </button>
      </div>
      <div className="flex space-x-4 mt-8">
        <Link
          to="/pomodoro"
          className="bg-secondary hover:bg-secondary-light text-white px-6 py-3 rounded-md text-lg shadow-lg transition duration-300"
        >
          Go to Pomodoro
        </Link>
      </div>
    </div>
  );
};

export default TimerPage;
