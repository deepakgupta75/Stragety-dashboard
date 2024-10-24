import React from "react";

const ToggleView = ({ selectedView, setSelectedView }) => {
  const views = ["Bullish", "Bearish", "RangeBound", "Volatile"];
  return (
    <div className="toggle-buttons">
      {views.map((view) => (
        <button
          key={view}
          className={`px-4 py-2 rounded-lg ${
            selectedView === view ? "bg-blue-500 text-white" : " text-black"
          } hover:bg-blue-300 transition duration-200`}
          onClick={() => setSelectedView(view)}
        >
          {view}
        </button>
      ))}
    </div>
  );
};

export default ToggleView;
