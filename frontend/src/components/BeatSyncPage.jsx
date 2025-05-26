import React, { useState } from "react";

export default function BeatSyncPage() {
  const [videos, setVideos] = useState([]);
  const [audio, setAudio] = useState(null);

  const handleVideoChange = (e) => {
    const files = Array.from(e.target.files);
    const videoFiles = files.filter((f) => f.type.startsWith("video/"));
    setVideos([...videos, ...videoFiles]);
  };

  const handleAudioChange = (e) => {
    setAudio(e.target.files[0]);
  };

  return (
    <div className="p-4">
      <input
        type="file"
        multiple
        accept="video/*"
        onChange={handleVideoChange}
        className="mb-2"
      />
      <input
        type="file"
        accept="audio/mp3"
        onChange={handleAudioChange}
        className="mb-4"
      />

      <div className="space-y-2">
        <h2 className="font-semibold">Videos</h2>
        {videos.map((vid, i) => (
          <video
            key={i}
            src={URL.createObjectURL(vid)}
            className="w-full max-w-md rounded shadow"
            controls
          />
        ))}

        {audio && (
          <div>
            <h2 className="font-semibold mt-4">Audio Track</h2>
            <audio controls src={URL.createObjectURL(audio)} />
          </div>
        )}

        <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Create Reel
        </button>
      </div>
    </div>
  );
}
