import React from "react";
import Event from "../event/Event";
// import { createNumbersArray } from "../../utils/time.units.js";
const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

const Hour = ({ dataHour, hourEvents }) => {
  console.log(hourEvents)
  return (
    <div className="calendar__time-slot" data-time={dataHour + 1}>
      {hourEvents.map(({ id, start, end, title, description }) => {
        const from = new Date(start);
        const to = new Date(end);
        const eventStart = `${formatTime(
          from.getHours()
        )}:${formatTime(from.getMinutes())}`;
        const eventEnd = `${formatTime(to.getHours())}:${formatTime(to.getMinutes())}`;
        return (
          <Event
            key={id}
            id={id}
            height={(to.getTime() - from.getTime()) / 1000 / 60}
            marginTop={from.getMinutes()}
            time={`${eventStart} - ${eventEnd}`}
            title={title}
            description={description}
          />
        );
      })}
    </div>
  );
};

export default Hour;

// const createEventElement = (event) => {
//   const { start, end, title, id, description } = event
//   const startEl = new Date(start)
//   const endEl = new Date(end)

//   const durationInMin = (startEl.getTime() - endEl.getTime()) / 1000 / 60

//   const eventElem = document.createElement('div')
//   eventElem.dataset.eventId = id
//   eventElem.style.top = `${startEl.getMinutes()}px`
//   eventElem.style.height = `${durationInMin}px`
//   eventElem.classList.add('event')

//   const eventTitle = document.createElement('div')
//   eventTitle.classList.add('event__title')
//   eventTitle.textContent = title

//   const eventTime = document.createElement('div')
//   eventTime.textContent = `${getTime(startEl)} - ${getTime(endEl)}`
//   eventTime.classList.add('event__time')

//   const eventDescription = document.createElement('div')
//   eventDescription.classList.add('event__description')
//   eventDescription.textContent = description

//   eventElem.append(eventTitle, eventTime, eventDescription)

//   return eventElem
// }

// // export const renderEvents = () => {
// //   removeEventsFromCalendar()
// //   getEvents().then((events) => {
// //       const startDateTime = getDisplayedWeekStart()
// //       const endDateTime = shmoment(startDateTime).add('days', 7).result()
// //       events
// //           .filter((event) => {
// //               if (
// //                   new Date(event.start).getTime() >=
// //                       startDateTime.getTime() &&
// //                   new Date(event.end).getTime() < endDateTime.getTime() ===
// //                       true
// //               )
// //                   return event
// //           })
// //           .forEach((event) => {
// //               const { start } = event
// //               const startEl = new Date(start)
// //               const eventElem = createEventElement(event)
// //               const slotElem = document.querySelector(
// //                   `.calendar__day[data-day="${startEl.getDate()}"] .calendar__time-slot[data-time="${startEl.getHours()}"]`
// //               )
// //               slotElem.append(eventElem)
// //           })
// //   })
// // }
