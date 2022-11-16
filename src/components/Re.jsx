import React from "react";

const Re = () => {
  return (
    <div className="mt-10">
      <h1 className="text-2xl underline text-center text-[#B95E09]">
        Achieving the circular economy
      </h1>
      <section className="grid place-items-center mt-6 md:grid-cols-3 gap-6 md:gap-0">
        <div className="rounded shadow-lg shadow-[#B95E09] w-[90%]">
          <img />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">Reuse</div>
            <p className="text-gray-700 text-base">
              To use an object or resource material again for either he same
              purpose or another purpose without changing the object structure
              in a significant way.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Reuse
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Recycle
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Reduce
            </span>
          </div>
        </div>
        {/**Another section */}
        <div className="rounded shadow-[#B95E09] shadow-lg w-[90%] ">
          <img />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">Recycle</div>
            <p className="text-gray-700 text-base">
              To collect and process materials that would otherwise be thrown away
              as trash and turning the into new good products. This is for the
              benefit of the environment.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Reuse
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Recycle
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Reduce
            </span>
          </div>
        </div>
        {/**Another section */}
        <div className="rounded shadow-[#B95E09] shadow-lg w-[90%] ">
          <img />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">Reduce</div>
            <p className="text-gray-700 text-base">
              Let us simply create less waste.With reducing you stop the problem
              at the source and it summarizes the other 2Rs.This platform does
              exist for this purpose.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Reuse
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Recycle
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #Reduce
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Re;
