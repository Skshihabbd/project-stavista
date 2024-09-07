/* eslint-disable react/prop-types */
import { useState } from "react";
import { DateRange } from "react-date-range";

const Calender = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  return (
    <DateRange
      showDateDisplay={false}
      rangeColors={["#F43F5E"]}
      editableDateInputs={true}
      onChange={(item) => setState([item.selection])}
      moveRangeOnFirstSelection={false}
      ranges={state}
    />
  );
};

export default Calender;
