import { useState } from "react";
import AddRoomForm from "../../../components/Form/AddRoomForm";
import { imageUpload } from "../../../api/utils/image";
import useAuth from "../../../hooks/useAuth";

const Addroom = () => {
  const { user } = useAuth();
  const [imageView, setImageView] = useState("");
  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: null,
    key: "selection",
  });
  const handleDate = (item) => {
    // console.log(range);
    setDate(item.selection);
  };

  //   console.log(date);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const location = form.location.value;
    const category = form.category.value;
    const to = date.startDate;
    const from = date.endDate;
    const title = form.title.value;
    const image = form.image.files[0];
    const price = form.price.value;
    const totalGuest = form.total_guest.value;
    const bedrooms = form.bedrooms.value;
    const bathrooms = form.bathrooms.value;
    const description = form.description.value;

    console.log(image);
    const host = {
      name: user.displayName,
      image: user.photoURL,
      email: user.email,
    };
    try {
      const image_url = await imageUpload(image);
      console.log(image_url);
      const roomData = {
        location,
        category,
        to,
        from,
        title,
        image: image_url,
        price,
        totalGuest,
        bedrooms,
        bathrooms,
        host,
        description,
      };
      console.table(roomData);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h1>addroom</h1>

      <AddRoomForm
        date={date}
        handleDate={handleDate}
        handleSubmit={handleSubmit}
        setImageView={setImageView}
        imageView={imageView}
      ></AddRoomForm>
    </div>
  );
};

export default Addroom;
