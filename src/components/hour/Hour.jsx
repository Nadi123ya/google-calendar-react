import React from "react";
import { createNumbersArray } from "../../utils/time.units.js";

const Hour = () => {
  return createNumbersArray(0, 24).map((dataTime) => (
    <div
      className="calendar__time-slot"
      key={dataTime}
      data-time={dataTime}
    ></div>
  ));
};

export default Hour;
