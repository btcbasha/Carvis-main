import car from "../assets/car.svg";
import quickChat from "../assets/quickChat.svg";
import Carvis from "../assets/Carvis.png";
import settingSide from "../assets/settingsSide.svg";

import Mechanicaldashboardside from "./Mechanicaldashboardside";
export default function Screen1() {
  // Mock data
  const recentCompletedJobs = [
    { car: "Ford Explorer 2020", issue: "transmission leak" },
    { car: "Toyota Corolla 2018", issue: "engine oil" },
    { car: "GMC Sierra 2015", issue: "brake fluid" },
    { car: "Toyota Prius 2023", issue: "change tires" },
    { car: "Ford Fusion 2015", issue: "electrical wiring" },
  ];

  const newlyAssignedVehicles = [
    {
      id: "01",
      car: "BMW M3 2020",
      issue: "Engine fault suspected, misfire sounds at high speeds.",
      image: "./car1.jpg",
    },
    {
      id: "02",
      car: "Ford Expedition 2019",
      issue: "A/C leaking fluid, might be a broken hose.",
      image: "./car2.jpg",
    },
  ];

  const vehiclesOnHold = [
    {
      id: "01",
      car: "Ford Mustang 2019",
      issue: "Waiting for transmission part",
      image: "./car3.jpg",
    },
    {
      id: "02",
      car: "Honda Accord 2018",
      issue: "On hold for customer approval",
      image: "./car4.jpg",
    },
  ];

  const guidesAndNews = [
    {
      title: "Common Repairs",
      author: "Steve Bob",
      image: "./car6.jpg",
    },
    {
      title: "How to use this tool",
      author: "Bob Coupes",
      image: "./car7.jpg",
    },
    {
      title: "New Ford update",
      author: "James Chris",
      image: "./car8.jpg",
    },
  ];

  const toolsSearch = [
    {
      name: "Supercharger XYZ",
      status: "Available",
      image: "./car9.jpg",
    },
    { name: "Turbo 2.3", status: "Request", image: "./car10.jpg" },
    {
      name: "Engine Oil",
      status: "Available",
      image: "./car11.jpg",
    },
    { name: "Brake", status: "Request", image: "./car12.jpg" },
  ];

  return (
    <>
      <div className="flex flex-col lg:flex-row  bg-gray-100">
        <div className="bg-[#7F7F7F] hidden xl:flex  w-[24%]  flex-col">
          <div className="bg-[#111111] mx-4 rounded-lg mt-2 text-white px-4 py-2 cursor-pointer text-center">
            <h1 className="text-[18px] font-bold font-body">
              Diagnose New Vehicle
            </h1>
          </div>

          <div className="flex justify-between p-4">
            <div className="text-center cursor-pointer">
              <div className=" rounded-full w-12 h-12  mx-auto">
                <img src={quickChat} alt="Quick Chat" />
              </div>
              <span className="text-[14px] font-header">Quick Chat</span>
            </div>
            <div className="text-center cursor-pointer">
              <div className=" rounded-full w-12 h-12  mx-auto">
                <img src={settingSide} alt="setting" />
              </div>
              <span className="text-[14px] font-header">Settings</span>
            </div>
          </div>

          <div className="h-4/6 bg-white m-4 p-5 rounded-lg  overflow-y-auto">
            <h3 className="font-bold  text-2xl h-1/6 font-header">
              Recent Vehicles
            </h3>
            <section className="flex flex-col justify-between h-4/6">
              {recentCompletedJobs.map((job, index) => (
                <p key={index} className="mb-2 text-base font-medium">
                  {job.car} -{job.issue}
                </p>
              ))}
            </section>
            <p className="text-sm text-black mt-7">more vehicles...</p>
          </div>

          <div className="p-4 mt-auto">
            <button className="border-[1px] border-white font-body w-full p-2 mb-2 text-white rounded">
              View FAQ for Carvis
            </button>
            <button className="border-[1px] border-white font-body w-full p-2 mb-2 text-white rounded">
              Ask other mechanics (Link to WhatsApp)
            </button>
          </div>

          {/* <div className="bg-[#111111] text-white p-4 text-center">
        <img className="w-44 mx-auto" src={Carvis} alt="logo" />
      </div> */}
        </div>
<div className="flex xl:hidden ">
<Mechanicaldashboardside/>
</div>
        <div className="flex-grow lg:p-4">
          <div className="bg-[#7F7F7F] xl:rounded-lg flex flex-col gap-8 p-5">
            <p className="text-xl ml-7 xl:ml-0 font-semibold flex items-center">
              <img src={car} alt="setting" className="w-10" />
              <p className="font-body">MyMechanical Dashboard</p>
            </p>
            <section className="flex flex-col lg:flex-row gap-6 -mt-4">
              <div className="rounded-xl lg:w-6/12 bg-white p-4 gap-3 flex flex-col">
                <p className="text-xl font-medium">My Bay</p>
                <p className="font-medium text-black/80">
                  Newly Assigned Vehicles
                </p>
                {newlyAssignedVehicles.map((vehicle, index) => (
                  <section key={index} className="flex my-2">
                    <img src={vehicle.image} alt="" className="w-3/12" />
                    <section className="w-8/12 flex flex-col px-5 py-3 justify-between ">
                      <p className="font-bold text-lg">{vehicle.car}</p>

                      <p className="font-medium text-black/60">
                        {vehicle.issue}
                      </p>
                    </section>
                    <p className="w-1/12 font-medium text-black/60 py-4">
                      {vehicle.id}
                    </p>
                  </section>
                ))}
                <p className="font-medium text-black/80">Vehicles on hold</p>
                {vehiclesOnHold.map((vehicle, index) => (
                  <section key={index} className="flex my-2">
                    <img src={vehicle.image} alt="" className="w-3/12" />
                    <section className="w-8/12 flex flex-col px-5 py-6 justify-between ">
                      <p className="font-bold text-lg">{vehicle.car}</p>

                      <p className="font-medium text-black/60">
                        {vehicle.issue}
                      </p>
                    </section>
                    <p className="w-1/12 font-medium text-black/60 py-4">
                      {vehicle.id}
                    </p>
                  </section>
                ))}
              </div>
              <div className="lg:w-6/12  flex flex-col gap-7">
                <section>
                  <p className="font-medium text-black/80 mb-4">
                    Guides & News
                  </p>
                  <section className="w-full flex flex-row gap-5">
                    <section className="bg-white rounded-2xl lg:h-60 w-7/12 p-2">
                      <img src={"./car5.jpg"} alt="" />
                      <section className="flex flex-col justify-between flex-grow  h-[40%]">
                        <p className="font-semibold text-lg my-1">
                          New tips for hybrids
                        </p>
                        <p className="">John Collins</p>
                      </section>
                    </section>
                    <section className="w-5/12 flex flex-col gap-3 lg:h-60 ">
                      {guidesAndNews.map((guide, index) => (
                        <div
                          key={index}
                          className="bg-white rounded-xl flex flex-row overflow-hidden p-1.5 h-2/6"
                        >
                          <div className="w-8/12 flex flex-col justify-between">
                            <p className="text-base font-medium">
                              {guide.title}
                            </p>
                            <p className="text-xs">{guide.author}</p>
                          </div>
                          <img src={guide.image} alt="" className="w-4/12" />
                        </div>
                      ))}
                    </section>
                  </section>
                </section>
                <section className="bg-white rounded-xl p-7">
                  <input
                    type="text"
                    className="font-medium bg-black/20 p-2 w-full outline-none rounded-lg"
                    placeholder="Tool Search"
                  />
                  <section className="flex flex-col gap-3">
                    {toolsSearch.map((tool, index) => (
                      <div
                        key={index}
                        className=" rounded-xl border-b bg-white flex flex-row my-1 py-2 "
                      >
                        <img src={tool.image} alt="" className="" />
                        <section className="text-base font-medium flex px-5 flex-col w-8/12">
                          <p>{tool.name}</p>
                          <span className="text-sm text-black/80">
                            Conversation Preview...
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
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="bg-[#111111] text-white w-full p-4 text-center">
        <img className="w-44 mx-auto" src={Carvis} alt="logo" />
      </div>
    </>
  );
}
