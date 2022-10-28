import React from "react";
import moment from "moment";
import { updateEvent } from "../../gateway/eventsGateway";

class ModalFormUpdated extends React.Component {
  state = {
    title: this.props.updatedEvent.title,
    description: this.props.updatedEvent.description,
    date: moment(this.props.updatedEvent.start).format("YYYY-MM-DD"),
    start: moment(this.props.updatedEvent.start).format("HH:mm"),
    end: moment(this.props.updatedEvent.end).format("HH:mm"),
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (this.state.title === "" || this.state.description === "") {
      alert("Please fill in the form!");
      return;
    }

    const updatedEvent = {
      title: this.state.title,
      description: this.state.description,
      start: new Date(moment(this.state.date + " " + this.state.start)),
      end: new Date(moment(this.state.date + " " + this.state.end)),
    };

    updateEvent(this.props.eventToDelete, updatedEvent).then(() => this.props.fetchEvents());
    this.props.onCloseModal();
  };

  render() {
    return (
      <form className="event-form" onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="event-form__field"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <div className="event-form__time">
          <input
            type="date"
            name="date"
            className="event-form__field"
            value={this.state.date}
            onChange={this.handleChange}
          />
          <input
            type="time"
            name="startTime"
            className="event-form__field"
            value={this.state.start}
            onChange={this.handleChange}
          />
          <span>-</span>
          <input
            type="time"
            name="endTime"
            className="event-form__field"
            value={this.state.end}
            onChange={this.handleChange}
          />
        </div>
        <textarea
          name="description"
          placeholder="Description"
          className="event-form__field"
          value={this.state.description}
          onChange={this.handleChange}
        ></textarea>
        <button type="submit" className="event-form__submit-btn">
          Create
        </button>
      </form>
    );
  }
}

export default ModalFormUpdated;
