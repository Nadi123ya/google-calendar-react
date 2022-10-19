import React, { useEffect } from "react";
import propTypes from "prop-types";
import CreateButton from "./CreateButton.jsx";
import { getDisplayedMonth } from "../../utils/time.units.js";
import "./navigation.scss";
import "../../variables.scss";

const Header = ({ setStartDate, currentDay, createEvent, setCreateEvent }) => {
  const displayedMonthElem = getDisplayedMonth(currentDay);

  const onChangeWeek = (event) => {
    const switchArrow = event.target.closest("button");

    if (switchArrow === null) {
      return;
    }

    const mondayCurrentWeek = currentDay;
    const day = new Date(mondayCurrentWeek).getDate();
    const week = 7;

    switchArrow.dataset.direction === "next"
      ? setStartDate({
          currentDay: new Date(mondayCurrentWeek.setDate(day + week)),
        })
      : switchArrow.dataset.direction === "prev"
      ? setStartDate({
          currentDay: new Date(mondayCurrentWeek.setDate(day - week)),
        })
      : setStartDate({ currentDay: new Date() });
  };

  useEffect(() => {
    const navElem = document.querySelector(".navigation");
    navElem.addEventListener("click", onChangeWeek);
    return () => {
      navElem.removeEventListener("click", onChangeWeek);
    };
  }, []);

  return (
    <header className="header">
      <CreateButton createEvent={createEvent} setCreateEvent={setCreateEvent} />
      <div className="navigation">
        <button data-direction="today" className="navigation__today-btn button">
          Today
        </button>
        <button
          data-direction="prev"
          className="icon-button navigation__nav-icon"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          data-direction="next"
          className="icon-button navigation__nav-icon"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
        <span className="navigation__displayed-month">
          {displayedMonthElem}
        </span>
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  setStartDate: propTypes.func,
  currentDay: propTypes.object,
};
Header.dafaulProps = {
  currentDay: new Date(),
};
