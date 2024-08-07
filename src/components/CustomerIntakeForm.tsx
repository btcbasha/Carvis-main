import { useState } from "react";
const CustomerIntakeForm = () => {
  const [customerComplaint, setCustomerComplaint] = useState("");
  const [mechanicNotes, setMechanicNotes] = useState("");
  const [activeDTCs, setActiveDTCs] = useState("");

  const handleSave = () => {
    // Handle save functionality here
  };

  const handleCancel = () => {
    // Handle cancel functionality here
  };

  return (
    <div className="bg-[#7F7F7F] border rounded-lg p-8 w-full max-w-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-redHat text-[#030303] font-semibold">
          Customer Intake
        </h2>
        <button className="text-white hover:text-gray-900 bg-">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_5_684)">
              <path
                d="M22 0H6C2.68629 0 0 2.68629 0 6V22C0 25.3137 2.68629 28 6 28H22C25.3137 28 28 25.3137 28 22V6C28 2.68629 25.3137 0 22 0Z"
                fill="white"
              />
            </g>
            <g clip-path="url(#clip0_5_684)">
              <path
                d="M18.0834 10.7391L17.2609 9.91663L14.0001 13.1775L10.7392 9.91663L9.91675 10.7391L13.1776 14L9.91675 17.2608L10.7392 18.0833L14.0001 14.8225L17.2609 18.0833L18.0834 17.2608L14.8226 14L18.0834 10.7391Z"
                fill="black"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_5_684"
                x="0"
                y="0"
                width="28"
                height="28"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_5_684"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_5_684"
                  result="shape"
                />
              </filter>
              <clipPath id="clip0_5_684">
                <rect
                  width="14"
                  height="14"
                  fill="white"
                  transform="translate(7 7)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
      <p className="text-[#E1E1E1] mb-4 font-redHat ">
        Let's gather some basic info
      </p>
      <div className="mb-4">
        <label
          className="block text-[#E1E1E1] font-redHat text-[13px] mb-2"
          htmlFor="customer-complaint"
        >
          Enter Customer Complaint
        </label>
        <input
          id="customer-complaint"
          type="text"
          className="w-full p-2 placeholder:text-black font-redHat text-[13px] border border-gray-400 rounded-full"
          placeholder="Describe the issues the customer mentioned"
          value={customerComplaint}
          onChange={(e) => setCustomerComplaint(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-[#E1E1E1] font-redHat text-[13px] mb-2"
          htmlFor="mechanic-notes"
        >
          Enter Mechanic Notes
        </label>
        <input
          id="mechanic-notes"
          type="text"
          className="w-full p-2 border placeholder:text-black font-redHat text-[13px] border-gray-400 rounded-full"
          placeholder="Share your initial pre-check and what you’d like to check first"
          value={mechanicNotes}
          onChange={(e) => setMechanicNotes(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label className="block text-[#E1E1E1] font-redHat text-[13px] mb-2">
          Active DTCs
        </label>
        <input
          id="active-dtcs"
          type="text"
          className="w-full p-2 border placeholder:text-black font-redHat text-[13px] border-gray-400 rounded-full"
          placeholder="List all active DTCs activate on the vehicle"
          value={activeDTCs}
          onChange={(e) => setActiveDTCs(e.target.value)}
        />
      </div>
      <div className="flex justify-between gap-5">
        <button
          className="px-4 py-2 bg-white w-6/12 font-redHat text-[13px] text-gray-700 border border-gray-400 rounded-full hover:bg-gray-100"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          className="px-4 py-2 bg-black w-6/12 font-redHat text-[13px] text-white rounded-full hover:bg-gray-800"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CustomerIntakeForm;
