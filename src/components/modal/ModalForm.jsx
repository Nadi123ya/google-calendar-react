import React from "react";
import moment from "moment";
// import propTypes from "prop-types";

class ModalForm extends React.Component {
  state = {
    title: "",
    description: "",
    date: moment(this.props.eventDay).format("YYYY-MM-DD"),
    fromTime: moment(this.props.eventDay).format("hh:mm"),
    toTime: moment(this.props.eventDay).add(1, "hours").format("hh:mm"),
  };

  handleChange = (e) => {
    const { name, val } = e.target;

    this.setState({
      [name]: val,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    return;
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
            value={this.state.fromTime}
            onChange={this.handleChange}
          />
          <span>-</span>
          <input
            type="time"
            name="endTime"
            className="event-form__field"
            value={this.state.toTime}
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

export default ModalForm;
