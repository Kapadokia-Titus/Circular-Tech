import React from "react";
import { useGlobalContext } from "../Context";

const Contact = () => {
  const {loading} = useGlobalContext()
  return (
    <div>
{loading && <h1 className="text-4xl text-center font-bold">loading...</h1>}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127357.71188581262!2d39.596222583956944!3d-4.035014502468972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184012e78ec02c7d%3A0xcb618bbc35d0db5a!2sMombasa!5e0!3m2!1sen!2ske!4v1668111231878!5m2!1sen!2ske"
        className="border-0 w-full h-[450px]"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="grid md:grid-cols-2 lg:gap-9 place-items-center mt-16">
        <div>
          <h1 className="text-4xl font-semibold mb-12">Contact Info</h1>
          <h5>PHONE NUMBER</h5>
          <h3 className="font-bold text-xl mb-12">+25470000000</h3>
          <hr className="text-gray-500" />
          <h5>ADDRESS</h5>
          <h3 className="font-bold text-xl mb-12">Mombasa</h3>
          <hr className="text-gray-500" />

          <h5>Email</h5>
          <h3 className="font-bold text-xl">circular_tech@info.com</h3>
          <hr className="text-gray-500" />
        </div>

        <form className="grid plae-items-center gap-6 mt-10 md:mt-0">
          <h1 className="text-gray-600">
            feel free to contact us by filling the form below
          </h1>
          <input
            type="text"
            className="h-[48px] border border-solid p-2 w-[300px] rounded"
            placeholder="Name"
          />
          <input
            type="email"
            className="h-[48px] border border-solid p-2 w-[300px] rounded"
            placeholder="Email"
          />
          <textarea
            className="h-[450px] border border-solid p-2 w-[300px] rounded-lg"
            placeholder="message"
          />
          <button className="h-16 rounded-lg w-48  bg-[#B95E09] text-xl text-white">
            SEND US
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
