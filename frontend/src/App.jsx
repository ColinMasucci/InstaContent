import React, { useState } from "react";
import PageSelector from "./components/PageSelector";
import CollagePage from "./components/CollagePage";
import BeatSyncPage from "./components/BeatSyncPage";

export default function App() {
  const [currentTab, setCurrentTab] = useState("Collage");

  return (
    <div className="min-h-screen bg-gray-50">
      <PageSelector currentTab={currentTab} setCurrentTab={setCurrentTab} />
      {currentTab === "Collage" ? <CollagePage /> : <BeatSyncPage />}
    </div>
  );
}
