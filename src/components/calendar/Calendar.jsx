import React from "react";
import Navigation from "../navigation/Navigation";
import Week from "../week/Week";
// import Sidebar from "../sidebar/Sidebar";

import "./calendar.scss";
// import { getWeekStartDate, generateWeekRange } from './utils/time.units.js';

// class Calendar extends React.Component {
//   render() {
// const { weekDays } = this.props;

const Calendar = ({ weekDays }) => {
  return (
    <section className="calendar">
      <Navigation weekDays={weekDays} />
      <div className="calendar__body">
       <Week weekDays={weekDays}/>
      </div>
    </section>
  );
};

// }

export default Calendar;
