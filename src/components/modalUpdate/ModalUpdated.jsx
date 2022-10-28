import React, { useEffect } from "react";
import "../modal/modal.scss";
import propTypes from "prop-types";
import ModalFormUpdated from "./ModalFormUpdated";

const ModalUpdated = ({
  updateEvent,
  setUpdatedEvent,
  fetchEvents,
  events,
  eventToDelete,
}) => {
  const updatedEvent = events.find((el) => el.id === eventToDelete);

  const onCloseModal = () => {
    setUpdatedEvent(!updateEvent);
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
          <ModalFormUpdated
            fetchEvents={fetchEvents}
            onCloseModal={onCloseModal}
            eventToDelete={eventToDelete}
            updatedEvent={updatedEvent}
          />
        </div>
      </div>
    </div>
  );
};
export default ModalUpdated;

ModalUpdated.propTypes = {
  updatedEvent: propTypes.object,
  eventToDelete: propTypes.string,
  fetchEvents: propTypes.func,
  onCloseModal: propTypes.func,
};
