import { Link } from "react-router";

export default function Navbar() {
  return (
    <div className="h-16 bg-[#242424] border-b border-gray-200 sticky top-0">
      <div className="flex justify-between px-4 items-center h-full max-w-6xl  mx-auto">
        <Link to={"/"} className="text-3xl">
          Logo
        </Link>
        <div className="flex gap-6">
          <Link to={"/about"} className="text-xl ">
            About us
          </Link>
          <Link to={"/contact"} className="text-xl ">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
