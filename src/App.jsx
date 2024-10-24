import React, { useState } from "react";
import ToggleView from "./components/ToggleView";
import DateDropdown from "./components/DateDropdown";
import StrategyCard from "./components/StrategyCard";

function App() {
  const dateArray = [
    "24-Apr-2024",
    "02-May-2024",
    "09-May-2024",
    "31-May-2024",
    "21-Jun-2024",
  ];

  const strategyArray = [
    {
      View: "Bullish",
      Value: {
        "24 Apr 2024": [
          "Bull Call Spread",
          "Bull Put Spread",
          "Long Call",
          "Bull Call Spread",
        ],
        "02 May 2024": [
          "Bull Call Spread",
          "Long Call",
          "Strategy2",
          "Bull Call Spread",
        ],
        "09 May 2024": ["Strategy Put", "Strategy Call"],
      },
    },
    {
      View: "Bearish",
      Value: {
        "24 Apr 2024": ["Bear Call Spread", "Long Put", "Bear Call Spread"],
        "31 May 2024": ["Long Put", "Long Put"],
        "21 Jun2024": ["Bear Put Spread", "Long Put"],
      },
    },
    {
      View: "RangeBound",
      Value: {
        "24 Apr 2024": ["Short Straddle", "Iron Butterfly", "Short Straddle"],
        "02 May 2024": ["Short Straddle", "Iron Butterfly"],
        "21 Jun 2024": ["Iron Condor"],
      },
    },
    {
      View: "Volatile",
      Value: {
        "02 May 2024": ["Long Straddle", "Strategy1"],
        "09 May 2024": ["Long Straddle"],
        "31 May 2024": ["Long Straddle", "Long Strangle"],
      },
    },
  ];

  const [selectedView, setSelectedView] = useState("Bullish");
  const [selectedDate, setSelectedDate] = useState(dateArray[0]);

  const getStrategies = () => {
    const strategies =
      strategyArray.find((item) => item.View === selectedView)?.Value[
        selectedDate
      ] || [];
    const strategyCount = strategies.reduce((acc, strategy) => {
      acc[strategy] = (acc[strategy] || 0) + 1;
      return acc;
    }, {});
    return strategyCount;
  };

  const strategyCount = getStrategies();

  return (
    <div>
      <ToggleView
        selectedView={selectedView}
        setSelectedView={setSelectedView}
      />
      <DateDropdown
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      {Object.keys(strategyCount).length === 0 ? (
        <p>No strategies available for {selectedDate}</p>
      ) : (
        Object.keys(strategyCount).map((strategy, index) => (
          <StrategyCard
            key={index}
            strategy={strategy}
            count={strategyCount[strategy]}
          />
        ))
      )}
    </div>
  );
}

export default App;
