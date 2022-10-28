import React, { useEffect } from "react";
import "./modal.scss";
import propTypes from "prop-types";
import ModalForm from "./ModalForm";

const Modal = ({
  setEventDay,
  eventDay,
  createEvent,
  setCreateEvent,
  fetchEvents,
  events,
}) => {
  
  const onCloseModal = () => {
    setEventDay(new Date());
    setCreateEvent(!createEvent);
  };

  useEffect(() => {
    const modalCloseButton = () => {
      onCloseModal();
    };

    const closeModal = document.querySelector(".create-event__close-btn");
    closeModal.addEventListener("click", modalCloseButton);
    return () => {
      closeModal.removeEventListener("click", modalCloseButton);
    };
  });
  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button className="create-event__close-btn">
            <i className="tiny material-icons">close</i>
          </button>
          <ModalForm
            eventDay={eventDay}
            fetchEvents={fetchEvents}
            onCloseModal={onCloseModal}
            events={events}
          />
        </div>
      </div>
    </div>
  );
};
export default Modal;

Modal.propTypes = {
  setEventDay: propTypes.func,
  eventDay: propTypes.object,
  createEvent: propTypes.bool,
  setCreateEvent: propTypes.func,
  fetchEvents: propTypes.func,
  events: propTypes.array,
};