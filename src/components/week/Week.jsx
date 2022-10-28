import React, { useEffect } from "react";
import Day from "../day/Day";
import moment from "moment";
import propTypes from "prop-types";

const Week = ({
  weekDays,
  setCreateEvent,
  setEventDay,
  events,
  setPopupStyles,
  setPopup,
  setEventToDelete,
}) => {
  useEffect(() => {
    const weekElem = document.querySelector(".calendar__week");

    function handleEventClick(event) {
      const isEvent = event.target.closest(".event");

      if (isEvent) {
        const eventId = isEvent.getAttribute("data-event-id");
        setEventToDelete(eventId);
        const eventTitleElem = isEvent.querySelector(".event__title");
        const eventTitle = eventTitleElem.textContent;
        const eventDescrElem = isEvent.querySelector(".event__description");
        const eventDescr = eventDescrElem.textContent;
        const eventTimeElem = isEvent.querySelector(".event__time");
        const eventTime = eventTimeElem.textContent;

        setPopupStyles({
          top: `${event.pageX}px`,
          left: `${event.pageY}px`,
          id: eventId,
          title: eventTitle,
          time: eventTime,
          description: eventDescr,
        });
        setPopup(true);
        return;
      }
      const hour = 1;
      const choosenTime = event.target
        .closest(".calendar__time-slot")
        .getAttribute("data-time");

      const choosenDay = event.target
        .closest(".calendar__day")
        .getAttribute("data-day");

      const chosenDate = weekDays.filter(
        (date) => Number(moment(date).format("DD")) === Number(choosenDay)
      );
      setEventDay(moment(chosenDate[0]).add(choosenTime - hour, "hours"));
      setCreateEvent(true);
    }
    weekElem.addEventListener("click", handleEventClick);
    return () => {
      weekElem.removeEventListener("click", handleEventClick);
    };
  });
  return (
    <div className="calendar__week">
      {weekDays.map((dayStart) => {
        const dayEnd = new Date(dayStart.getTime()).setHours(
          dayStart.getHours() + 24
        );
        const dayEvents = events.filter((event) => {
          return (
            new Date(event.start) >= dayStart &&
            new Date(event.end) < new Date(dayEnd)
          );
        });
        return (
          <Day
            key={dayStart.getDate()}
            dataDay={dayStart.getDate()}
            dayEvents={dayEvents}
          />
        );
      })}
    </div>
  );
};

export default Week;

Week.propTypes = {
  weekDays: propTypes.array,
  setCreateEvent: propTypes.func,
  setEventDay: propTypes.func,
  events: propTypes.array,
  setPopupStyles: propTypes.func,
  setPopup: propTypes.func,
  setEventToDelete: propTypes.func,
};
