import React from "react";
import Hour from "../hour/Hour";
import Clock from "../clock/Clock";
import { createNumbersArray } from "../../utils/time.units.js";

import propTypes from "prop-types";

const Day = ({ dataDay, dayEvents }) => {

  console.log(dayEvents)
  
  const hours = createNumbersArray(0, 24);
  return (
    <div className="calendar__day" data-day={dataDay}>
      {dataDay === new Date().getDate() ? <Clock /> : null}
     
      {
      hours.map((hour) => {
        const hourEvents = 
        dayEvents.filter(
          (event) => 
            new Date(event.start).getHours() === hour
          );

        return (
          <Hour key={dataDay + hour} dataHour={hour} hourEvents={hourEvents} />
        );
      })}
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
