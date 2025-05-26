import React, { useState } from "react";

export default function CollagePage() {
  const [images, setImages] = useState([]);

  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    const imageFiles = files.filter((f) => f.type.startsWith("image/"));
    setImages([...images, ...imageFiles]);
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setImages([...images, ...files]);
  };

  return (
    <div className="p-4">
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="w-full h-40 border-2 border-dashed border-gray-400 rounded-lg flex items-center justify-center text-gray-500 mb-4"
      >
        Drag and drop images here
      </div>

      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleFileChange}
        className="mb-4"
      />

      {images.length > 0 && (
        <div>
          <h2 className="text-lg font-bold mb-2">Preview</h2>
          <div className="grid grid-cols-3 gap-2">
            {images.map((img, i) => (
              <img
                key={i}
                src={URL.createObjectURL(img)}
                className="w-full h-auto object-cover rounded shadow"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
