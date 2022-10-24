import React, { useState } from "react";
import Header from "./components/header/Header.jsx";
import Calendar from "./components/calendar/Calendar.jsx";
import Modal from "./components/modal/Modal.jsx";
import Popup from "./components/popup/Popup.jsx";
import { getEvents } from "./gateway/eventsGateway";
import { getWeekStartDate, generateWeekRange } from "./utils/time.units.js";

const App = () => {
  const [events, setEvents] = useState({ eventsList: [] });
  const [currentDate, setNavDate] = useState({ date: new Date() });
  const [createEvent, setCreateEvent] = useState(false);

  const { date } = currentDate;
  const [eventDay, setEventDay] = useState(date);

  const [popUp, setPopup] = useState(false);
  const [popupStyles, setPopupStyles] = useState({
    top: "",
    left: "",
  });

  // const { events } = getEventsArr;
  // console.log(events);
  const weekDays = generateWeekRange(getWeekStartDate(date));
  // console.log(weekDays)

  const fetchEvents = () => {
    getEvents().then((eventsList) =>
      setEvents({
        eventsList,
      })
    );
  };

  return (
    <>
      <Header
        currentMonday={getWeekStartDate(date)}
        setNavDate={setNavDate}
        createEvent={createEvent}
        setCreateEvent={setCreateEvent}
      />
      <Calendar
        setPopupStyles={setPopupStyles}
        weekDays={weekDays}
        setEventDay={setEventDay}
        setCreateEvent={setCreateEvent}
        setPopup={setPopup}
        events={events.eventsList}
      />
      {!createEvent ? null : (
        <Modal
          eventDay={eventDay}
          setEventDay={setEventDay}
          createEvent={createEvent}
          setCreateEvent={setCreateEvent}
          fetchEvents={fetchEvents}
        />
      )}
      {!popUp ? null : <Popup setPopup={setPopup} popupStyles={popupStyles} />}
    </>
  );
};

export default App;
