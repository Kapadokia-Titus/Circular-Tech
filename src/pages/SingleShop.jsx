import React from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../Context";
import { Link } from "react-router-dom";

const SingleShop = () => {
  const { RepairShopId } = useParams();
  const { technicians, otherTechnicians } = useGlobalContext();
  

  const technician = technicians.find((tech) => tech.id === RepairShopId);
  return (
    <div className="xl:mx-60">
      <div className="p-2 grid md:grid-cols-2 place-items-center mt-4">
        <div>
          <h1 className="text-center text-2xl font-bold md:hidden mb-2">
            {technician.name}
          </h1>
          {technician.available ? (
            <h2 className="font-bold text-green-800 text-center">Online</h2>
          ) : (
            <h2 className="font-bold text-red-700 text-center">Offline</h2>
          )}
          <img src={technician.imageUrl} className="h-[400px]" />
        </div>
        <div className="grid place-items-center">
          <h1 className="hidden text-center text-5xl font-bold  md:block">
            {technician.name}
          </h1>
          <h2 className="text-xl font-bold md:text-2xl">
            Location: {technician.shopLocation}
          </h2>
          <h2 className="text-lg font-bold">Shop Name: {technician.shop}</h2>
          <h2 className="font-bold">Rating: {technician.rating}/5</h2>
        </div>
      </div>
      <div className="grid place-items-center xl:mx-70">
        <p className="text-center text-gray-800">{technician.description}</p>
        <div className="grid gap-4 md:grid-cols-2">
          <Link to="/ChatContainer"><button
            className={`${
              technician.available ? "bg-green-800" : "bg-red-800"
            } w-[250px] h-[60px] text-white font-bold mt-4 rounded ml-4`}
          >
            Chat with {technician.name}
          </button></Link>
          <Link to="/RepairShop"><button className=" w-[250px] h-[60px] text-black font-bold mt-4 rounded border-2">
           Back to Repair Shop 
          </button></Link>
        </div>
      </div>
      <div className="mt-12">
        <h1 className="text-2xl text-center">Other Suggestions...</h1>
        <div className="grid place-items-center md:grid-cols-2 lg:grid-cols-3">
          {otherTechnicians.map((otherTechnician) => {
            return (
              <div
                className="rounded-lg  bg-white max-w-sm grid place-items-center m-4 p-2 "
                key={otherTechnician.id}
              >
                <div className="rounded shadow-sm shadow-[#B95E09] w-[90%]">
                  <img
                    src={otherTechnician.imageUrl}
                    className="h-[200px] w-[250px]"
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-center">
                      {otherTechnician.name}
                    </div>
                    <p className="text-gray-700 text-lg text-center">
                      Located in {otherTechnician.shopLocation}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SingleShop;
