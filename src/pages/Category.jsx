import React from "react";
import { Link } from "react-router-dom";
import SideBar from "../components/SideBar";
import { useGlobalContext } from "../Context";
import { FcFilledFilter } from "react-icons/fc";
import { AiOutlineClose } from "react-icons/ai";
const RepairShop = () => {
  const { category, handleOtherTechnicians,sideBar,handleSideBar ,loading} = useGlobalContext();
 
  return (
    <div>
      {loading && <h1 className="text-4xl text-center font-bold">loading...</h1>}
      <span className={`${sideBar?"hidden":""} lg:hidden grid place-items-center `} onClick={handleSideBar}>
      <FcFilledFilter size={50}/>
      <h1>Menu</h1>
      </span>
      
    <div className=" flex">
      <SideBar/>
    <div className=" grid  place-items-center md:grid-cols-2 xl:grid-cols-3 p-10 xl:ml-64 top-0">
      {category.map((technician) => {
        return (
          <div
            className="rounded-sm shadow-lg shadow-[#B95E09] bg-white max-w-sm grid place-items-center m-4 pb-4 "
            key={technician.id}
          >
            <img src={technician.imageUrl} alt="" className="h-[250px]  " />

            <div className="p-6">
              <h5 className="text-[#B95E09] text-center  text-xl font-medium mb-2">
                {technician.name}
              </h5>
              <h5 className="text-center font-bold">
                Located at: {technician.shopLocation}
              </h5>
              <p className="text-gray-700 text-sm mb-4">
                {technician.description}
              </p>
            </div>
            <button
              onClick={() => handleOthercategory(technician.id)}
              className="w-32 h-16 text-xl border-2 border-black"
            >
              <Link to={`/RepairShop/${technician.id}`}>Visit Shop</Link>
            </button>
          </div>
        );
      })}
    </div>
    </div>
    </div>
  );
};

export default RepairShop;
