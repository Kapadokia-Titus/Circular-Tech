import React from "react";
import { Link } from "react-router-dom";
import SideBar from "../components/SideBar";
import { useGlobalContext } from "../Context";
import { FcFilledFilter } from "react-icons/fc";
import { AiOutlineClose } from "react-icons/ai";
const RepairShop = () => {
  const { technicians, handleOtherTechnicians,sideBar,handleSideBar,category,loading } = useGlobalContext();
 
  return (
    <div>
      {loading && <h1 className="text-4xl text-center font-bold">loading...</h1>}
      <span className={`${sideBar?"hidden":""} lg:hidden grid place-items-center `} onClick={handleSideBar}>
      <FcFilledFilter size={50}/>
      <h1>Menu</h1>
      </span>
      
    <div className=" flex">
      <SideBar/>
    <div className=" grid  place-items-center grid-cols-2 xl:grid-cols-3 p-2 sm:p-10 xl:ml-64 top-0">
      {category.map((technician) => {
        return (
          <div
            className="rounded-sm shadow md:shadow-lg shadow-[#B95E09] bg-white max-w-sm grid place-items-center m-4 pb-4 sm:h-[420px] sm:min-w-[300px] md:h-[600px]  md:min-w-[400px] h-[250px]"
            key={technician.id}
          >
            <img src={technician.imageUrl} alt="" className="sm:h-[250px] h-[100px]  " />

            <div className="p-6">
              <h5 className="text-[#B95E09] text-center  txt-sm sm:text-xl font-medium sm:mb-2">
                {technician.name}
              </h5>
              <h5 className="text-center font-bold">
                <span className="hidden sm:block">Located at:</span> {technician.shopLocation}
              </h5>
              <div className="text-gray-700 text-sm  sm:mb-4 hidden md:block">
                <span className="text-center font-bold underline text-cente">Dealer in:</span>
                {technician.products.map(item=>{
                  return(
                    <div key={item}>
                    <ul>
                      <li className="text-center">{item}</li>
                    </ul>
                    </div>
                  )
                })}
              </div>
              
            </div>
            <button
              onClick={() => handleOtherTechnicians(technician.id)}
              className="md:w-32 md:h-16 md:text-xl h-12 w-16 border-2 mt-[-25px] border-black text-sm sm:"
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
