import React, { useEffect } from "react";
import Day from "../day/Day";
import moment from "moment";
import propTypes from "prop-types";

const Week = ({
  weekDays,
  setCreateEvent,
  setEventDay,
  events,
  setPopUpStyles,
  setPopup
}) => {
  useEffect(() => {
    const weekElem = document.querySelector(".calendar__week");

    function handleEventClick(event) {
      const isEvent = event.target.closest(".event");
      if (isEvent) {
       
      const eventCoordinates = isEvent.getBoundingClientRect();
      // const eventId = isEvent.getAttribute("data-event-id");
      // seteventToDelete(eventId);
      setPopUpStyles({
        top: `${eventCoordinates.y + eventCoordinates.height}px`,
        left: `${eventCoordinates.x}px`,
      })
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
      // const eventId = isEvent.getAttribute("data-event-id");

      // const popupElem = document.querySelector('.popup')
      // function openPopup(x, y) {
      //     popupElem.style.top = `${y}px`
      //     popupElem.style.left = `${x}px`
      // }
      

      // setPopUpStyles({
      //   top: `${event.pageX}px`,
      //   left: `${event.pageY}px`,
      // });
      // openPopup(event.pageX, event.pageY)
      setPopup(true);
    }
    weekElem.addEventListener("click", handleEventClick);
    return () => {
      weekElem.removeEventListener("click", handleEventClick);
    };
  });
   console.log(events)
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
};
