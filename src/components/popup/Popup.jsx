import React from "react";
// import Navigation from "../navigation/Navigation";
// import Week from "../week/Week";
import "./popup.scss";

const Popup = ({ top, left }) => {
  return (
    <div className="popup overlays">
      <div className="popup__content" style={{ top: `${top}`, left: `${left}` }}>
        <div className="popup__buttons">
          <button className="delete__event-btn">
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
          <div className="popup__id" data-event-id={1}></div>
          <p className="popup__title">{1}</p>
          <p className="popup__event">{1}</p>
          <p className="popup__text">{1}</p>
        </div>
      </div>
    </div>
  );
};

export default Popup;
