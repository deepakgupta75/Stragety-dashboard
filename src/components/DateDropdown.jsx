import React from "react";

const DateDropdown = ({ selectedDate, setSelectedDate }) => {
  const dateArray = [
    "24 Apr 2024",
    "02 May 2024",
    "09 May 2024",
    "31 May 2024",
    "21 Jun 2024",
  ];

  return (
    <select
      value={selectedDate}
      onChange={(e) => setSelectedDate(e.target.value)}
      className="rounded-lg border border-gray-300 p-2 shadow-sm w-full mb-4 mt-8 text-xl font-medium"
    >
      {dateArray.map((date) => (
        <option key={date} value={date} className="rounded-lg">
          {date}
        </option>
      ))}
    </select>
  );
};

export default DateDropdown;
