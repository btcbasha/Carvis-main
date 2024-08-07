import btn from "../assets/image.png";

function InputBar() {
  return (
    <div className="bg-[#D3D3D3]  p-2">
      <div className="relative">
        <input
          className="w-[99%] lg:w-full p-2 lg:pr-10 rounded-md border-none outline-none"
          type="text"
          placeholder="Type your message..."
        />
        <img
          src={btn}
          alt="Button"
          className="absolute right-3 lg:right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 cursor-pointer"
        />
      </div>
    </div>
  )
}

export default InputBar;