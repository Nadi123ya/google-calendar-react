import React from "react";
import Event from "../event/Event";
import propTypes from "prop-types";
const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

const Hour = ({ dataHour, hourEvents }) => {
  return (
    <div className="calendar__time-slot" data-time={dataHour + 1}>
      {hourEvents.map(({ id, start, end, title, description }) => {
        const from = new Date(start);
        const to = new Date(end);
        const eventStart = `${formatTime(from.getHours())}:${formatTime(
          from.getMinutes()
        )}`;
        const eventEnd = `${formatTime(to.getHours())}:${formatTime(
          to.getMinutes()
        )}`;
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

Hour.propTypes = {
  dataHour: propTypes.number,
  hourEvents: propTypes.array,
};
