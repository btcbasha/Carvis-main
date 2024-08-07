import profile from "../assets/profilePic.png";

const Settings = () => {
  return (
    <div className="bg-white p-4 w-full lg:w-[75%]">
      <div className="flex flex-col lg:flex-row justify-between border-b-[#EBEBEB] border-b-2 items-center pb-4 mb-4">
        <div className="flex flex-col lg:flex-row items-center mb-4 lg:mb-0">
          <img
            src={profile}
            alt="Profile"
            className="w-32 mb-4 lg:mb-0 lg:mr-4"
          />
          <div className="text-center lg:text-left">
            <h1 className="text-2xl font-bold font-body">James Philip</h1>
            <p className="text-gray-600 font-header">B Tech</p>
          </div>
        </div>
        <button className="bg-black text-white px-4 py-2 hover:underline font-roboto rounded w-full lg:w-auto">
          Log Out
        </button>
      </div>

      <div className="flex flex-col lg:flex-row justify-between">
        <div className="text-center mx-auto hover:underline cursor-pointer mb-8 lg:mb-0">
          <div className="w-[6.25rem] h-[6.25rem] rounded-full mx-auto mb-2 flex items-center justify-center">
            <svg
              width="84"
              height="84"
              viewBox="0 0 84 84"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M75.3333 0.333328H8.66658C4.04158 0.333328 0.333252 4.04166 0.333252 8.66666V54.5C0.333252 59.125 4.04158 62.8333 8.66658 62.8333H25.3333V83.6667L41.9999 75.3333L58.6666 83.6667V62.8333H75.3333C79.9583 62.8333 83.6666 59.125 83.6666 54.5V8.66666C83.6666 4.04166 79.9583 0.333328 75.3333 0.333328ZM75.3333 54.5H8.66658V46.1667H75.3333V54.5ZM75.3333 33.6667H8.66658V8.66666H75.3333V33.6667Z"
                fill="#030303"
              />
            </svg>
          </div>
          <p className="font-header">MyPlan</p>
        </div>

        <div className="text-center mx-auto hover:underline cursor-pointer mb-8 lg:mb-0">
          <div className="w-[6.25rem] h-[6.25rem] rounded-full mx-auto mb-2 flex items-center justify-center">
            <svg
              width="110"
              height="109"
              viewBox="0 0 110 109"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_7_72)">
                <path
                  d="M82.25 73.03C78.7983 73.03 75.71 74.3925 73.3483 76.5271L40.9662 57.6792C41.1933 56.6346 41.375 55.59 41.375 54.5C41.375 53.41 41.1933 52.3654 40.9662 51.3208L72.985 32.6546C75.4375 34.9254 78.6621 36.3333 82.25 36.3333C89.7892 36.3333 95.875 30.2475 95.875 22.7083C95.875 15.1692 89.7892 9.08334 82.25 9.08334C74.7108 9.08334 68.625 15.1692 68.625 22.7083C68.625 23.7983 68.8067 24.8429 69.0337 25.8875L37.015 44.5538C34.5625 42.2829 31.3379 40.875 27.75 40.875C20.2108 40.875 14.125 46.9608 14.125 54.5C14.125 62.0392 20.2108 68.125 27.75 68.125C31.3379 68.125 34.5625 66.7171 37.015 64.4463L69.3517 83.3396C69.1246 84.2933 68.9883 85.2925 68.9883 86.2917C68.9883 93.6038 74.9379 99.5533 82.25 99.5533C89.5621 99.5533 95.5117 93.6038 95.5117 86.2917C95.5117 78.9796 89.5621 73.03 82.25 73.03Z"
                  fill="#030303"
                />
              </g>
              <defs>
                <clipPath id="clip0_7_72">
                  <rect
                    width="109"
                    height="109"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <p className="font-header">Referal Link</p>
          <p className="text-xs text-gray-600 font-header">
            (Get a month free for every sign up)
          </p>
        </div>

        <div className="text-center mx-auto hover:underline cursor-pointer">
          <div className="w-[6.25rem] h-[6.25rem] rounded-full mx-auto mb-2 flex items-center justify-center">
            <svg
              width="136"
              height="136"
              viewBox="0 0 136 136"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_7_83)">
                <path
                  d="M67.9998 33.4333C69.5626 33.4333 71.11 33.7411 72.5538 34.3392C73.9975 34.9372 75.3094 35.8137 76.4144 36.9188C77.5194 38.0238 78.396 39.3356 78.994 40.7794C79.592 42.2232 79.8998 43.7706 79.8998 45.3333C79.8998 46.8961 79.592 48.4435 78.994 49.8873C78.396 51.331 77.5194 52.6429 76.4144 53.7479C75.3094 54.8529 73.9975 55.7295 72.5538 56.3275C71.11 56.9255 69.5626 57.2333 67.9998 57.2333C64.8438 57.2333 61.8169 55.9796 59.5853 53.7479C57.3536 51.5162 56.0998 48.4894 56.0998 45.3333C56.0998 42.1773 57.3536 39.1504 59.5853 36.9188C61.8169 34.6871 64.8438 33.4333 67.9998 33.4333ZM67.9998 84.4333C84.8298 84.4333 102.567 92.7067 102.567 96.3333V102.567H33.4332V96.3333C33.4332 92.7067 51.1698 84.4333 67.9998 84.4333ZM67.9998 22.6667C55.4765 22.6667 45.3332 32.81 45.3332 45.3333C45.3332 57.8567 55.4765 68 67.9998 68C80.5232 68 90.6665 57.8567 90.6665 45.3333C90.6665 32.81 80.5232 22.6667 67.9998 22.6667ZM67.9998 73.6667C52.8698 73.6667 22.6665 81.26 22.6665 96.3333V113.333H113.333V96.3333C113.333 81.26 83.1298 73.6667 67.9998 73.6667Z"
                  fill="#030303"
                />
              </g>
              <defs>
                <clipPath id="clip0_7_83">
                  <rect width="136" height="136" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <p className="font-header">Edit Profile</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
