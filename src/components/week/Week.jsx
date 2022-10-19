import React, { useEffect } from "react";
import Day from "../day/Day";
import Sidebar from "../sidebar/Sidebar";
import propTypes from "prop-types";

const Week = ({ weekDays, currentMonday, createEvent, setCreateEvent }) => {
  useEffect(() => {
    const weekElem = document.querySelector(".calendar__week");

    function handleEventClick(event) {
      const isEvent = event.target.closest(".event");
      if (!isEvent) {
        setCreateEvent(!createEvent);
        const dateInput = document.querySelector(`input[name='date']`);
        const startTimeInput = document.querySelector(
          `input[name='startTime']`
        );
        const endTimeInput = document.querySelector(`input[name='endTime']`);
        
        const displayedWeek = currentMonday;
        const choosedDay = event.target
          .closest(".calendar__day")
          .getAttribute(`data-day`);

        dateInput.value = new Date(
          `${displayedWeek.getFullYear()}-${
            displayedWeek.getMonth() + 1
          }-${choosedDay}`
        ).toLocaleDateString("en-CA");

        let hour = event.target.dataset.time;
        if (+hour < 10) {
          hour = "0" + event.target.dataset.time;
          startTimeInput.value = hour + ":00";
          endTimeInput.value =
            hour === "09" ? +hour + 1 + ":00" : "0" + (+hour + 1) + ":00";
          setCreateEvent(!createEvent);
          return;
        }
      }
      setCreateEvent(!createEvent);
      startTimeInput.value = hour + ":00";
      endTimeInput.value = +hour + 1 + ":00";
      return;
    }

    weekElem.addEventListener("click", handleEventClick);
    return () => {
      weekElem.removeEventListener("click", handleEventClick);
    };
  });
  // getEvents().then((events) => {
  //     openPopup(event.pageX, event.pageY)
  //     const eventId = isEvent.getAttribute('data-event-id')
  //     const filteredEvent = events.find((el) => el.id === eventId)
  //     popupDescriptionElem.innerHTML = `
  //     <div class="popup__id" data-event-id=${filteredEvent.id}>
  //     <p class="popup__title">${filteredEvent.title}</p>
  //     <p class="popup__event">${getTime(
  //         new Date(filteredEvent.start)
  //     )} - ${getTime(new Date(filteredEvent.end))}</p>
  //     <p class="popup__text">${filteredEvent.description}</p>
  //     <div>`
  // })
  // }
  return (
    <div className="calendar__week-container">
      <Sidebar />
      <div className="calendar__week">
        <Day weekDays={weekDays} />
      </div>
    </div>
  );
};

export default Week;

Week.propTypes = {
  weekDays: propTypes.array,
};
