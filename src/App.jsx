import React, { useState } from "react";
import Header from "./components/header/Header.jsx";
import Calendar from "./components/calendar/Calendar.jsx";
import Modal from './components/modal/Modal.jsx';
import { getWeekStartDate, generateWeekRange } from "./utils/time.units.js";

const App = () => {
  const [weekStartDate, setStartDate] = useState({ currentDay: new Date() });
  const [createEvent, setCreateEvent] = useState(false);
  const { currentDay } = weekStartDate;
  const [eventDay, setEventDay] = useState(currentDay);

  const weekDays = generateWeekRange(getWeekStartDate(currentDay));

  return (
    <>
      <Header
        currentDay={getWeekStartDate(currentDay)}
        setStartDate={setStartDate}
        createEvent={createEvent}
        setCreateEvent={setCreateEvent}
      />
      <Calendar weekDays={weekDays} />
      {
        !createEvent
          ? null
          : <Modal
            eventDay={eventDay}
            setEventDay={setEventDay}
            createEvent={createEvent}
            setCreateEvent={setCreateEvent}
          />
        }
    </>
  );
};

export default App;
