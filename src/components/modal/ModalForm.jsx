import React, { useState } from "react";
import moment from "moment";
import { createEvent } from "../../gateway/eventsGateway";

const ModalForm = ({ eventDay, fetchEvents, onCloseModal }) => {

  const [modal, setModal] = useState({
    title: "",
    description: "",
    date: moment(eventDay).format("YYYY-MM-DD"),
    start: moment(eventDay).format("HH:mm"),
    end: moment(eventDay).add(1, "hours").format("HH:mm"),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setModal({
      ...modal,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (modal.title === "" || modal.description === "") {
      alert("Please fill in the form!");
      return;
    }

    const newEvent = {
      title: modal.title,
      description: modal.description,
      start: new Date(moment(modal.date + " " + modal.start)),
      end: new Date(moment(modal.date + " " + modal.end)),
    };

    createEvent(newEvent).then(() => fetchEvents());
    onCloseModal();
  };
  return (
    <form className="event-form" onSubmit={onSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        className="event-form__field"
        value={modal.title}
        onChange={handleChange}
      />
      <div className="event-form__time">
        <input
          type="date"
          name="date"
          className="event-form__field"
          value={modal.date}
          onChange={handleChange}
        />
        <input
          type="time"
          name="startTime"
          className="event-form__field"
          value={modal.start}
          onChange={handleChange}
        />
        <span>-</span>
        <input
          type="time"
          name="endTime"
          className="event-form__field"
          value={modal.end}
          onChange={handleChange}
        />
      </div>
      <textarea
        name="description"
        placeholder="Description"
        className="event-form__field"
        value={modal.description}
        onChange={handleChange}
      ></textarea>
      <button type="submit" className="event-form__submit-btn">
        Create
      </button>
    </form>
  );
};

export default ModalForm;

