import React from "react";
import { useGlobalContext } from "../Context";
import { auth } from "../config/firebaseConfig";
import { Link } from "react-router-dom";
const Customer = () => {
  const { customers, loading } = useGlobalContext();
  
  return (
    <div>
      {loading && <h1 className="text-4xl text-center font-bold">loading...</h1>}
      <h2 className="text-[#B95E09] text-3xl font-bold text-center">
         {auth.currentUser?.displayName}
      </h2>
      <h2 className="text-black text-2xl font-bold text-center">
        
      </h2>
      <div className="grid place-items-center md:grid-cols-2 xl:grid-cols-3 md:mx-60 mx-10">
        {customers.map((customer) => {
          return (
            <div
              className="rounded-lg  bg-white max-w-sm grid place-items-center m-4 p-2 "
              key={customer.id}
            >
              <div className="font-bold text-xl mb-2 text-center">
                   posted by {customer.username}
                  </div>
              <div className="rounded shadow-sm shadow-[#B95E09] w-[90%]">
                <img src={customer.imageUrl} className="h-[300px] w-[300px]" />
                <div className="px-6 py-4 grid place-items-center">
                  <div className="font-bold text-xl mb-2 text-center">
                    {customer.title}
                  </div>
                  <p className="text-gray-700 text-base mb-2">
                    {customer.description}
                  </p>
                  <Link to="/ChatContainer"><button className="w-24 border-2 border-black">
                    Bid</button></Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Customer;
