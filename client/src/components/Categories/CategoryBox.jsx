import { useNavigate, useSearchParams } from "react-router-dom";
import qs from "query-string";
import queryString from "query-string";
/* eslint-disable react/prop-types */
const CategoryBox = ({ label, icon: Icon, selected }) => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = () => {
    let currentQuery = { category: label };

    const url = queryString.stringifyUrl({
      url: "/",
      query: currentQuery,
    });
    navigate(url);
    console.log(url);
  };

  return (
    <div
      onClick={handleClick}
      className={`flex 
  flex-col  
  items-center 
  justify-center 
  gap-2
  
  p-3
  border-b-2
  hover:text-neutral-800
  transition
  cursor-pointer ${
    selected ? "border-b-orange-400 text-red-800" : ""
  }  ease-in-out duration-500 `}
    >
      <Icon size={26} />
      <div className="text-sm font-medium"> {label}</div>
    </div>
  );
};

export default CategoryBox;
