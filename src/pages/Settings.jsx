import React, { useState } from "react";

const SettingsPage = () => {
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);

  const handleNotificationsToggle = () => {
    setIsNotificationsEnabled(!isNotificationsEnabled);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-primary text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-8">Settings</h1>

      <div className="w-full max-w-lg px-4">
        <div className="flex justify-between items-center mb-6">
          <label htmlFor="notificationsToggle" className="text-lg font-semibold">
            Enable Notifications
          </label>
          <input
            type="checkbox"
            id="notificationsToggle"
            checked={isNotificationsEnabled}
            onChange={handleNotificationsToggle}
            className="h-6 w-6 bg-gray-200 rounded-full focus:outline-none"
          />
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => alert("Settings Saved!")}
            className="bg-accent hover:bg-accent-light text-white px-6 py-3 rounded-md text-lg shadow-lg transition duration-300"
          >
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
