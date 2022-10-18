import React from "react";
import Day from "../day/Day"
import Sidebar from "../sidebar/Sidebar"
import propTypes from "prop-types";

const Week = ({ weekDays }) => {
  console.log(weekDays);
  return (
    <div className="calendar__week-container">
          <Sidebar />
          <Day weekDays={weekDays} />
        </div>
  );
};

export default Week;

Week.propTypes = {
  weekDays: propTypes.array,
};

