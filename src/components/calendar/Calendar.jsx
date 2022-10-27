import React from "react";
import Navigation from "../navigation/Navigation";
import Week from "../week/Week";
import Sidebar from "../sidebar/Sidebar";

import "./calendar.scss";

const Calendar = ({
  setEventDay,
  weekDays,
  setCreateEvent,
  events,
  setPopup,
  setPopupStyles,
  setEventToDelete,
}) => {
  
  return (
    <section className="calendar">
      <Navigation weekDays={weekDays} />
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <Week
            setPopupStyles={setPopupStyles}
            setPopup={setPopup}
            weekDays={weekDays}
            events={events}
            setEventDay={setEventDay}
            setCreateEvent={setCreateEvent}
            setEventToDelete = {setEventToDelete}
          />
        </div>
      </div>
    </section>
  );
};

export default Calendar;
