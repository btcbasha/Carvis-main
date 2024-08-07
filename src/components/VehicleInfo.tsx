import React from "react";
import CarBg from "../assets/CarFormBg.png";

interface InputProps {
  type: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ type, placeholder }) => (
  <input
    className="p-2 rounded-full w-full placeholder-black font-redHat focus:outline-none focus:ring-2 focus:ring-blue-300"
    type={type}
    placeholder={placeholder}
  />
);

const VehicleInfo = () => {
  return (
    <div className="w-full lg:w-[76%] min-h-screen flex items-center justify-center relative">
      <img
        src={CarBg}
        className=" lg:block z-0 absolute h-full right-0 top-0 w-full lg:w-full object-cover"
        alt="Car background"
      />
      <div className="w-full max-w-md mx-4 lg:mx-auto border-white border-[1px] z-10 bg-[#7F7F7F] p-3 rounded-md shadow-lg">
        <h2 className="text-xl font-bold font-redHat mb-4 text-white">
          Customer Info
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-16 gap-y-2 mb-4">
          <Input type="text" placeholder="Name *" />
          <Input type="text" placeholder="Date *" />
          <Input type="tel" placeholder="Phone # *" />
          <Input type="email" placeholder="Email *" />
        </div>

        <h2 className="text-xl font-bold font-redHat mb-4 text-white">
          Vehicle Info
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-16 gap-y-2 mb-4">
          <Input type="text" placeholder="Make *" />
          <Input type="text" placeholder="Model *" />
          <Input type="text" placeholder="Year *" />
          <Input type="text" placeholder="Mileage *" />
          <Input type="text" placeholder="Engine *" />
          <Input type="text" placeholder="Last Service date *" />
        </div>

        <p className="text-black font-header text-center mb-2">OR Enter</p>
        <Input type="text" placeholder="VIN *" />

        <button className="w-full bg-[#030303] text-white p-2 rounded-full font-redHat hover:bg-gray-800 transition-colors mt-4">
          Add Vehicle
        </button>
      </div>
    </div>
  );
};

export default VehicleInfo;
