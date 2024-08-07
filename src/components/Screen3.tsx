import CustomerIntakeForm from "./CustomerIntakeForm";
import Sidebar from "./Sidebar";

export default function Screen3() {
  return (
    <div className="flex  bg-gray-100">
      <Sidebar />
      <div className="p-10 w-full xl:w-3/4">
        <section className="flex gap-2 w-full border-b-4 pb-4">
          <img src={"./car17.jpg"} alt="" />
          <section className="font-header">
            <p className="text-2xl font-body font-bold">BMW M3 2020</p>
            <p className="font-medium text-black/60">Miles: 50,000</p>
            <p className="font-medium text-black/60">
              Last Service Date: 05/2024
            </p>
            <p className="font-medium text-black/60">Engine Type: V6</p>
          </section>
        </section>
        <section className="flex flex-col justify-center items-center mt-10">
          <CustomerIntakeForm />
          <div className="relative mt-16 w-full">
            <input
              type="text"
              name=""
              id=""
              placeholder="Type your message here..."
              className="outline-none w-full border-[12px] font-header text-[14px] p-2 pr-10 border-[#D3D3D3]"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1  rounded-full">
              <svg
                width="32"
                height="31"
                viewBox="0 0 32 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_5_659)">
                  <path
                    d="M8.54712 26.1304L10.8334 28.4166L23.75 15.5L10.8334 2.58331L8.54712 4.86956L19.1775 15.5L8.54712 26.1304Z"
                    fill="#030303"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5_659">
                    <rect
                      width="31"
                      height="31"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
