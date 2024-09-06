import Container from "../../components/Shared/Container";
import { useParams } from "react-router-dom";
import Loader from "../../components/Shared/Loader";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@tanstack/react-query";

import useAxiousCommon from "../../hooks/useAxiousCommon";
import Header from "./Header";
import RoomInfo from "./RoomInfo";
import RoomReservation from "./RoomReservation";

const RoomDetails = () => {
  const { id } = useParams();

  const axiosCommon = useAxiousCommon();
  const { data: room = {}, isLoading } = useQuery({
    queryKey: ["room", id],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/room/${id}`);
      return data;
    },
  });

  console.log(room);
  if (isLoading) return <Loader />;

  return (
    <Container>
      <Helmet>
        <title>{room?.title}</title>
      </Helmet>
      {room && (
        <div className="max-w-screen-lg mx-auto">
          <div className="flex flex-col gap-6">
            <Header room={room} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
            <RoomInfo room={room} />

            <div className="md:col-span-3 order-first md:order-last mb-10">
              {/* RoomReservation */}
              <RoomReservation room={room} />
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

export default RoomDetails;
