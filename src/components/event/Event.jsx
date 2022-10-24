import React from "react";
import "./event.scss";
// import moment from "moment/moment";
// import propTypes from "prop-types";

const Event = ({ height, marginTop, title, id, description, time }) => {
  const eventPosition = {
    height,
    marginTop,
  };
  return (
    <div className="event" data-event-id={id} style={eventPosition}>
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
      <div className="event__description">{description}</div>
    </div>
  );
};

export default Event;

// Week.propTypes = {
//   weekDays: propTypes.array,
// };

