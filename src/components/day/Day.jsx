import React from "react";
import Hour from "../hour/Hour"
import Clock from "../clock/Clock"

import propTypes from "prop-types";

const Day = ({ weekDays }) => {
  console.log(weekDays);
  return (
    <div className="calendar__week">
      {weekDays.map((day) => (
        <div className="calendar__day" key={day.getDate()} data-day={day.getDate()}>
          {
            day.getDate() === new Date().getDate()
            ? <Clock/>
            : null
          }
         < Hour/>
        </div>
      ))}
    </div>
  );
};

export default Day;

Day.propTypes = {
  weekDays: propTypes.array,
};


// const currentDate = new Date();
// const currentDayElem = document.querySelector(
//   `.calendar__day[data-day="${currentDate.getDate()}"]`
// );