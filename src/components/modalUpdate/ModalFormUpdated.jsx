import React, {useState} from "react";
import moment from "moment";
import { updateEvent } from "../../gateway/eventsGateway";

const ModalFormUpdated = ({
  fetchEvents,
  onCloseModal,
  eventToDelete,
  updatedEvent,
}) => {
  const [updatedModal, setUpdatedModal] = useState({
    title: updatedEvent.title,
    description: updatedEvent.description,
    date: moment(updatedEvent.start).format("YYYY-MM-DD"),
    start: moment(updatedEvent.start).format("HH:mm"),
    end: moment(updatedEvent.end).format("HH:mm"),
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedModal({
      ...updatedModal,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (updatedModal.title === "" || updatedModal.description === "") {
      alert("Please fill in the form!");
      return;
    }

    const updatedEvent = {
      title: updatedModal.title,
      description: updatedModal.description,
      start: new Date(moment(updatedModal.date + " " + updatedModal.start)),
      end: new Date(moment(updatedModal.date + " " + updatedModal.end)),
    };

    updateEvent(eventToDelete, updatedEvent).then(() => fetchEvents());
    onCloseModal();
  };

  return (
    <form className="event-form" onSubmit={onSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        className="event-form__field"
        value={updatedModal.title}
        onChange={handleChange}
      />
      <div className="event-form__time">
        <input
          type="date"
          name="date"
          className="event-form__field"
          value={updatedModal.date}
          onChange={handleChange}
        />
        <input
          type="time"
          name="startTime"
          className="event-form__field"
          value={updatedModal.start}
          onChange={handleChange}
        />
        <span>-</span>
        <input
          type="time"
          name="endTime"
          className="event-form__field"
          value={updatedModal.end}
          onChange={handleChange}
        />
      </div>
      <textarea
        name="description"
        placeholder="Description"
        className="event-form__field"
        value={updatedModal.description}
        onChange={handleChange}
      ></textarea>
      <button type="submit" className="event-form__submit-btn">
        Create
      </button>
    </form>
  );
};

export default ModalFormUpdated;
