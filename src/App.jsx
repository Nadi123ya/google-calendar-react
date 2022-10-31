import React, { useEffect, useState } from "react";
import Header from "./components/header/Header.jsx";
import Calendar from "./components/calendar/Calendar.jsx";
import Modal from "./components/modal/Modal.jsx";
import ModalUpdated from "./components/modalUpdate/ModalUpdated.jsx";
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

  const [updateEvent, setUpdatedEvent] = useState(false);

  const [popupStyles, setPopupStyles] = useState({
    top: "",
    left: "",
    title: "",
    time: "",
    description: "",
    id: "",
  });

  const [eventToDelete, setEventToDelete] = useState(null);

  const weekDays = generateWeekRange(getWeekStartDate(date));

  const fetchEvents = () => {
    getEvents().then((eventsList) =>
      setEvents({
        eventsList,
      })
    );
  };

  useEffect(() => {
    fetchEvents();
  }, []);

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
        setEventToDelete={setEventToDelete}
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

      {!popUp ? null : (
        <Popup
          setPopup={setPopup}
          popupStyles={popupStyles}
          fetchEvents={fetchEvents}
          eventToDelete={eventToDelete}
          setUpdatedEvent={setUpdatedEvent}
        />
      )}

      {!updateEvent ? null : (
        <ModalUpdated
          eventToDelete={eventToDelete}
          events={events.eventsList}
          setUpdatedEvent={setUpdatedEvent}
          updateEvent={updateEvent}
          fetchEvents={fetchEvents}
        />
      )}
    </>
  );
};

export default App;
