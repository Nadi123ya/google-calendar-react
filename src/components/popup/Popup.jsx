import React, { useEffect } from "react";
import { deleteEvent } from "../../gateway/eventsGateway";
import "./popup.scss";
import propTypes from "prop-types";

const Popup = ({ popupStyles, setPopup, fetchEvents, eventToDelete, setUpdatedEvent }) => {
  const { top, left, title, time, description} = popupStyles;

  useEffect(() => {
    const closeBtn = document.querySelector(".close__event-btn");
    const popupElem = document.querySelector(".popup");
    const deleteBtn = document.querySelector(".delete__event-btn");
    const updateBtn = document.querySelector(".update__event-btn");

    const OnClosePopup = () => {
      setPopup(false);
    };

    const handleEventDelete = () => {
      deleteEvent(eventToDelete).then(() => fetchEvents());
    };

    const OpenUpdateModal = () => {
      setUpdatedEvent(true);
    };
    updateBtn.addEventListener("click", OpenUpdateModal);
    closeBtn.addEventListener("click", OnClosePopup);
    deleteBtn.addEventListener("click", handleEventDelete);
    popupElem.addEventListener("click", OnClosePopup);

    return () => {
      updateBtn.removeEventListener("click", OpenUpdateModal);
      closeBtn.removeEventListener("click", OnClosePopup);
      deleteBtn.removeEventListener("click", handleEventDelete);
      popupElem.removeEventListener("click", OnClosePopup);
    };
  });

  return (
    <div className="popup overlays" style={{ top: `${top}`, left: `${left}` }}>
      <div className="popup__content">
        <div className="popup__buttons">
          <button className="delete__event-btn" >
            <i className="small material-icons">delete</i>
          </button>
          <button className="update__event-btn">
            <i className="small material-icons">border_color</i>
          </button>
          <button className="close__event-btn">
            <i className="small material-icons">close</i>
          </button>
        </div>
        <div className="popup__description">
          <p className="popup__title">{title}</p>
          <p className="popup__event">{time}</p>
          <p className="popup__text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Popup;

Popup.propTypes = {
  popupStyles: propTypes.object,
  setPopup: propTypes.func,
  fetchEvents: propTypes.func,
  eventToDelete: propTypes.string,
};
