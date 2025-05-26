import React from "react";

export default function PageSelector({ currentTab, setCurrentTab }) {
  return (
    <div className="w-full flex justify-center gap-4 p-4 bg-gray-100 border-b">
      {["Collage", "BeatSync"].map((tab) => (
        <button
          key={tab}
          onClick={() => setCurrentTab(tab)}
          className={`px-4 py-2 rounded-full font-medium transition ${
            currentTab === tab
              ? "bg-blue-500 text-white"
              : "bg-white border text-gray-700"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
