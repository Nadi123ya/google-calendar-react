import React, { useEffect } from "react";

const hour = 60;
const clockHeight = () =>
  new Date().getHours() * hour + new Date().getMinutes();

const clockLine = () => {
  const presentTime = document.querySelector(".clock");
  presentTime.classList.add("clockline");
  presentTime.style.marginTop = `${clockHeight()}px`;
  presentTime.style.height = "1px";
  presentTime.style.width = "100px";
  presentTime.style.backgroundColor = "red";
  presentTime.style.position = "absolute";
};

const Clock = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      clockLine();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });
  return <div className="clock"></div>;
};

export default Clock;


