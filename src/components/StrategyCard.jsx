import React from "react";

const StrategyCard = ({ strategy, count }) => (
  <div className="strategy-card flex justify-between items-center border rounded-lg p-4 shadow-md mb-4">
    <h4 className="text-lg font-semibold">{strategy}</h4>
    <p className="text-sm">
      {count > 0
        ? `• ${count} ${count > 1 ? "Strategies" : "Strategy"}`
        : "No Strategies"}
    </p>
  </div>
);

export default StrategyCard;
