import React, { useEffect } from "react";
import propTypes from "prop-types";

const CreateButton = ({ setCreateEvent, createEvent }) => {
  useEffect(() => {
    const onToggle = () => {
      setCreateEvent(!createEvent);
    };
    const btn = document.querySelector(".create-event-btn");
    btn.addEventListener("click", onToggle);
    return () => {
      btn.removeEventListener("click", onToggle);
    };
  });
  return (
    <button className="button create-event-btn">
      <svg width="30" height="30" viewBox="0 0 36 36">
        <path fill="#34A853" d="M16 16v14h4V20z"></path>
        <path fill="#4285F4" d="M30 16H20l-4 4h14z"></path>
        <path fill="#FBBC05" d="M6 16v4h10l4-4z"></path>
        <path fill="#EA4335" d="M20 16V6h-4v14z"></path>
        <path fill="none" d="M0 0h36v36H0z"></path>
      </svg>
      Create
    </button>
  );
};

export default CreateButton;

CreateButton.propTypes = {
  setCreateEvent: propTypes.func,
  createEvent: propTypes.bool,
};
