import pricingBg from "../assets/pricingBg.png";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      features: ["Public Data", "10 Questions"],
      buttonText: "Get started with Free",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$50",
      features: [
        "Public Data",
        "Unlimited Questions",
        "OEM Service Data",
        "MasterTech Live Support",
      ],
      buttonText: "Get started with Pro",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom Quote",
      features: [
        "Public Data",
        "Unlimited Questions",
        "OEM Service Data",
        "MasterTech Live Support",
        "Proprietary Data Integration",
      ],
      buttonText: "Contact sales",
      highlighted: false,
    },
  ];

  return (
    <div className="relative bg-black min-h-screen flex items-center w-full lg:w-[76%] justify-center p-4 overflow-hidden">
      <img
        src={pricingBg}
        alt="Pricing Background"
        className="absolute w-full h-full object-cover z-0 right-0 top-0"
      />
      <div className="relative z-10 flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-8 max-w-6xl">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-[#1E1F26] flex flex-col rounded-md text-center p-6 w-full sm:w-72 ${
                plan.highlighted ? "border-[1px] border-blue-500" : ""
              }`}
            >
              <div className="flex-grow">
                <h2 className="text-white text-2xl font-manrope font-bold mb-2">
                  {plan.name}
                </h2>
                <p className="text-[#6AC8D8] font-manrope text-3xl font-bold border-b-[#3D3D3D] border-b-[1px] mb-2 pb-2">
                  {plan.price}
                  <span className="text-sm pb-2 text-[#6AC8D8]">
                    {plan.name === "Enterprise" ? "" : "/mo"}
                  </span>
                </p>
                <ul className="mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="text-[#E5E5E5] mb-2 font-manrope text-[14px] flex items-center gap-4"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.75502 12.015L0.205017 7.46495C-0.0683389 7.1916 -0.0683389 6.74838 0.205017 6.475L1.19494 5.48505C1.4683 5.21166 1.91154 5.21166 2.1849 5.48505L5.24999 8.55012L11.8151 1.98505C12.0884 1.71169 12.5317 1.71169 12.805 1.98505L13.795 2.975C14.0683 3.24835 14.0683 3.69157 13.795 3.96495L5.74497 12.015C5.47159 12.2883 5.02837 12.2883 4.75502 12.015Z"
                          fill="#007BFF"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className={`w-full py-2 mt-auto hover:brightness-150 rounded ${
                  plan.highlighted
                    ? "bg-blue-600 text-[#000000] border-white border-[1px]"
                    : "bg-transparent text-blue-500 border border-blue-500"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
