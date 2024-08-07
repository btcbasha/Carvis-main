import { Play } from "lucide-react";
import { MoreVertical } from "lucide-react";
import car from "../assets/car.svg";
import quickChat from "../assets/quickChat.svg";
import Carvis from "../assets/Carvis.png";

import settingSide from "../assets/settingsSide.svg";
import Mechanicaldashboardside from "./Mechanicaldashboardside";
export default function Screen2() {
  const appointments = [
    { name: "Steve Demps", time: "10AM", vehicle: "BMW M3 2023" },
    { name: "Roger James", time: "11 AM", vehicle: "Ford Explorer 2024" },
    { name: "Valterri Bottas", time: "11:30 AM", vehicle: "Mercedes C43 2015" },
    { name: "Roger Dug", time: "2 PM", vehicle: "Honda Civic 2012" },
    { name: "Alex David", time: "4 PM", vehicle: "Chevy Malibu 2020" },
  ];

  const toolsSearch = [
    {
      name: "Steve Rogers",
      status: "Available",
      skill: "A tech",
      image: "./car13.jpg",
    },
    {
      name: "Mike Bob",
      status: "Request",
      skill: "Master Tech",
      image: "./car14.jpg",
    },
    {
      name: "James Rob",
      status: "Available",
      skill: "B tech",
      image: "./car15.jpg",
    },
    {
      name: "Mike Green",
      status: "Request",
      skill: "Lube Tech",
      image: "./car16.jpg",
    },
  ];
  return (
    <>
      <div className="flex  bg-gray-100">
        <div className="bg-[#7F7F7F] h-[93vh] hidden xl:flex w-[24%]  flex-col">
          <div className="bg-[#111111] mx-4 rounded-lg mt-2 text-white px-4 py-2 cursor-pointer text-center">
            <h1 className="text-[18px] font-bold font-body">
              Diagnose New Vehicle
            </h1>
          </div>

          <div className="flex justify-around p-4">
            <div className="text-center cursor-pointer">
              <div className=" rounded-full w-12 h-12  mx-auto">
                <img src={quickChat} alt="Quick Chat" />
              </div>
              <span className="text-[14px] font-header">Quick Chat</span>
            </div>
            <div className="text-center cursor-pointer">
              <div className="rounded-full w-12 h-12  mx-auto">
                <img src={car} alt="car" />
              </div>
              <span className="text-[14px] font-header">
                MyGarage Dashboard
              </span>
            </div>
            <div className="text-center cursor-pointer">
              <div className=" rounded-full w-12 h-12  mx-auto">
                <img src={settingSide} alt="setting" />
              </div>
              <span className="text-[14px] font-header">Settings</span>
            </div>
          </div>

          <div className="bg-white m-4 p-4 h-[24rem]">
            <h2 className="mb-5 font-header ">Recent Vehicles</h2>
            <ul>
              {[1, 2, 3, 4, 5].map((num) => (
                <li key={num} className="mb-3 font-body font-semibold">
                  vehicle {num}
                </li>
              ))}
            </ul>
            <div className="mt-2 font-body">more vehicles....</div>
          </div>

          <div className="p-4 mt-auto">
            <button className="border-[1px] border-white font-body w-full p-2 mb-2 text-white rounded">
              View FAQ for Carvis
            </button>
            <button className="border-[1px] border-white font-body w-full p-2 mb-2 text-white rounded">
              Ask other mechanics (Link to WhatsApp)
            </button>
          </div>
        </div>
        <div className="flex xl:hidden ">
<Mechanicaldashboardside/>
</div>
        <div className="flex-grow xl:px-4 xl:pt-3 ">
          <div className="bg-[#7F7F7F] xl:h-[90vh] rounded-lg flex flex-col gap-8 p-5">
            <p className="text-xl font-semibold ml-7 flex items-center">
              <img src={car} alt="setting" className="w-10" />
              <p className="font-body">MyShopManager Dashboard</p>
            </p>
            <section className="flex flex-col xl:flex-row  gap-6">
              <div className="rounded-xl xl:w-6/12 bg-white p-4 gap-3 flex flex-col">
                <p className="text-4xl font-medium">Current Appointments</p>
                <div className="bg-white rounded-lg  p-4 ">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold"></h2>
                    <div className="flex items-center">
                      <span className="text-sm text-black mr-2 font-semibold">
                        Notes
                      </span>
                      <span className="text-sm text-black font-semibold">
                        Assign To
                      </span>
                    </div>
                  </div>
                  <ul>
                    {appointments.map((appointment, index) => (
                      <li
                        key={index}
                        className="flex items-center py-3 border-b last:border-b-0"
                      >
                        <div className="bg-black/30  rounded-full mr-2 w-7 h-7 flex justify-center items-center">
                          <Play size={20} />
                        </div>
                        <div className="flex-grow px-2">
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-black/80">
                              {appointment.name} - {appointment.time}
                            </span>
                            <div className="flex items-center">
                              <MoreVertical
                                className="text-black mr-10"
                                size={20}
                              />
                              <img src={"./share.svg"} alt="" />
                            </div>
                          </div>
                          <span className="text-sm text-gray-500">
                            {appointment.vehicle}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="xl:w-6/12  flex flex-col gap-7">
                <section>
                  <p className="font-medium text-black/80 text-lg mb-4">
                    Job Status Tracking
                  </p>
                  <section className="flex justify-between flex-wrap xl:flex-nowrap gap-3 xl:gap-7">
                    <div className="bg-blue-200 border-blue-400 border rounded-full flex justify-center items-center w-full xl:w-4/12 h-16">
                      <p className="text-black font-medium text-xl">
                        <span className="text-3xl">3</span> Waiting
                      </p>
                    </div>
                    <div className="bg-blue-200 border-blue-400 border rounded-full flex justify-center items-center w-full xl:w-4/12 h-16">
                      <p className="text-black font-medium text-xl">
                        <span className="text-3xl">5</span> In Servive
                      </p>
                    </div>
                    <div className="bg-blue-200 border-blue-400 border rounded-full flex justify-center items-center w-full xl:w-4/12 h-16">
                      <p className="text-black font-medium text-xl">
                        <span className="text-3xl">10</span> Completed
                      </p>
                    </div>
                  </section>
                </section>
                <section className="w-full flex items-center justify-center">
                  <section className="bg-white xl:w-10/12 rounded-xl p-7">
                    <input
                      type="text"
                      className="font-medium bg-black/20 p-2 w-full outline-none rounded-lg"
                      placeholder="Available Mechanics"
                    />
                    <section className="flex flex-col gap-3">
                      {toolsSearch.map((tool, index) => (
                        <div
                          key={index}
                          className=" rounded-xl bg-white flex flex-row my-1 py-2 "
                        >
                          <img src={tool.image} alt="" className="" />
                          <section className="text-base font-medium flex px-5 flex-col w-8/12">
                            <p>{tool.name}</p>
                            <span className="text-sm text-black/80">
                              {tool.skill}
                            </span>
                          </section>
                          <section className="text-base font-medium text-blue-500 w-32 text-center flex items-center">
                            {tool.status === "Available" ? (
                              <section className="flex items-center">
                                <section className="bg-green-500 rounded-full w-2 h-2 mx-3"></section>
                                {tool.status}
                              </section>
                            ) : (
                              <button className="mx-auto bg-black/60 text-white rounded-md p-1">
                                Request
                              </button>
                            )}
                          </section>
                        </div>
                      ))}
                    </section>
                  </section>
                </section>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="bg-[#111111] h-[7vh] text-white w-full p-4 text-center">
        <img className="w-44 mx-auto" src={Carvis} alt="logo" />
      </div>
    </>
  );
}
