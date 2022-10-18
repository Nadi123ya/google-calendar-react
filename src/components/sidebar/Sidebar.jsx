import React from "react";
import { createNumbersArray } from "../../utils/time.units.js";
import "./sidebar.scss"
const Sidebar = () => {
  return (
    <div className="calendar__time-scale">
      {createNumbersArray(0, 24).map((time) => (
        <div className="time-slot" key={time}>
          <span className="time-slot__time">
            {time >= 0 && time <= 9 ? `0${time}:00` : `${time}:00`}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
