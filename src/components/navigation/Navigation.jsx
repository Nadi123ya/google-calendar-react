import React from "react";
import propTypes from "prop-types";

const Navigation = ({ weekDays }) => {
  const daysOfWeek = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

  const getCurrentDay = (day, className) => {
    return new Date(new Date().toDateString()).getTime() === day.getTime()
      ? `${className} ${className}_active`
      : className;
  };

  return (
    <header className="calendar__header">
      {weekDays.map((dayLabel) => (
        <div key={dayLabel.getDate()} className="calendar__day-label day-label">
          <span className={getCurrentDay(dayLabel, "day-label__day-name")}>
            {daysOfWeek[dayLabel.getDay()]}
          </span>
          <span className={getCurrentDay(dayLabel, "day-label__day-number")}>
            {dayLabel.getDate()}
          </span>
        </div>
      ))}
    </header>
  );
};

export default Navigation;

Navigation.propTypes = {
    weekDays: propTypes.array,
};

