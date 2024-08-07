import { useEffect, useRef, useState } from "react";
// import car from "../assets/car.svg";
import quickChat from "../assets/quickChat.svg";
// import Carvis from "../assets/Carvis.png";
import settingSide from "../assets/settingsSide.svg";

const Mechanicaldashboardside = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const recentCompletedJobs = [
    { car: "Ford Explorer 2020", issue: "transmission leak" },
    { car: "Toyota Corolla 2018", issue: "engine oil" },
    { car: "GMC Sierra 2015", issue: "brake fluid" },
    { car: "Toyota Prius 2023", issue: "change tires" },
    { car: "Ford Fusion 2015", issue: "electrical wiring" },
  ];
  const sidebarContent = (
    <>
      <div className="bg-[#111111]  mx-4 rounded-lg mt-2 text-white px-4 py-2 cursor-pointer hover:brightness-200 text-center">
        <h1 className="text-[10px] md:text-[18px] font-bold font-body">
          Diagnose New Vehicle
        </h1>
      </div>

      <div className="flex justify-around p-4">
        <div className="text-center hover:underline cursor-pointer">
          <div className="rounded-full w-6 h-6 md:w-12 md:h-12 mx-auto">
            <img src={quickChat} alt="Quick Chat" />
          </div>
          <span className="text-[10px] md:text-[14px] font-header">
            Quick Chat
          </span>
        </div>
        
        <div className="text-center hover:underline cursor-pointer">
          <div className="rounded-full w-6 h-6 md:w-12 md:h-12 mx-auto">
            <img src={settingSide} alt="setting" />
          </div>
          <span className="text-[10px] md:text-[14px] font-header">
            Settings
          </span>
        </div>
      </div>

      <div className="bg-white  mx-1  md:m-4 p-4 h-auto md:h-[24rem]">
        <h2 className="mb-1 md:mb-5 font-header">Recent Vehicles</h2>
        <section className="flex flex-col justify-between h-4/6">
              {recentCompletedJobs.map((job, index) => (
                <p key={index} className="mb-2 text-xs my-2 font-medium">
                  {job.car} -{job.issue}
                </p>
              ))}
            </section>
        <div className="mt-2 font-body cursor-pointer hover:underline">
          more vehicles....
        </div>
      </div>

      <div className="p-4 mt-auto">
        <button className="border-[1px] border-white text-[12px] md:text-[1rem] font-body w-full p-2 mb-2 text-white rounded hover:bg-gray-700">
          View FAQ for Carvis
        </button>
        <button className="border-[1px] border-white font-body text-[12px] md:text-[1rem] w-full p-2 mb-1 text-white rounded hover:bg-gray-700">
          Ask other mechanics (Link to WhatsApp)
        </button>
      </div>

      
    </>
  );

  return (
    <>
      <div
        className={`xl:hidden fixed top-4 left-4 z-50 ${
          isOpen ? "hidden" : ""
        }`}
      >
        <button
          onClick={toggleSidebar}
          className="focus:outline-none text-white  focus:ring-2 focus:ring-opacity-50 focus:ring-gray-400"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <div className="hidden xl:flex bg-[#7F7F7F] w-[24%] h-screen flex-col">
        {sidebarContent}
      </div>

      <div
        ref={sidebarRef}
        className={`md:hidden fixed inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } bg-[#7F7F7F] w-72 overflow-auto space-y-6 py-7 px-2 transition duration-200 ease-in-out z-40`}
      >
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 text-white"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {sidebarContent}
      </div>
    </>
  );
};

export default Mechanicaldashboardside;
