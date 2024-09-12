import { useState } from "react";
import AddRoomForm from "../../../components/Form/AddRoomForm";

const Addroom = () => {
  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: null,
    key: "selection",
  });
  const handleDate = (item) => {
    // console.log(range);
    setDate(item.selection);
  };
  console.log(date);
  return (
    <div>
      <h1>addroom</h1>
      <AddRoomForm date={date} handleDate={handleDate}></AddRoomForm>
    </div>
  );
};

export default Addroom;
