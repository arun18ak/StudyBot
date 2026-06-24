import { FaMoon } from "react-icons/fa";

function Navbar() {
  return (
    <div
      className="
      h-14
      border-b
      border-[#2f2f2f]
      flex
      items-center
      justify-between
      px-6
      text-white
      "
    >
      <div className="font-semibold text-lg">
        AI Student Assistant
      </div>

      <button
        className="
        p-2
        rounded-lg
        hover:bg-[#2f2f2f]
        "
      >
        <FaMoon />
      </button>
    </div>
  );
}

export default Navbar;