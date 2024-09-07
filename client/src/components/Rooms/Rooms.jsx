import { useEffect, useState } from "react";
import Card from "./Card";
import Container from "../Shared/Container";
import { useSearchParams } from "react-router-dom";
import Heading from "../Shared/Heading";
import Loader from "../Shared/Loader";
import { useQuery } from "@tanstack/react-query";

import useAxiousCommon from "../../hooks/useAxiousCommon";

const Rooms = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get("category");
  console.log(name);
  const [rooms, setRooms] = useState([]);
  const [params, setParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const category = params.get("category");
  const axiosCommon = useAxiousCommon();
  const { data, isLoading } = useQuery({
    queryKey: ["roome", name],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/roome?category=${name}`);
      return data;
    },
  });
  console.log(data);

  if (isLoading) return <Loader />;
  return (
    <Container>
      {data && data.length > 0 ? (
        <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {data.map((room) => (
            <Card key={room._id} room={room} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-[calc(100vh-300px)]">
          <Heading
            center={true}
            title="No Rooms Available In This Category!"
            subtitle="Please Select Other Categories."
          />
        </div>
      )}
    </Container>
  );
};

export default Rooms;
