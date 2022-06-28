import Image from "next/image";
import airbnb_logo from "../public/airbnb_logo.png";
import {
  GlobeAltIcon,
  SearchIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/solid";

function Header() {
  return (
    <header className="sticky top-0 z-50  grid grid-cols-4 bg-white shadow-md p-5 md:p-10">
      {/* Left */}
      <div className="h-10 relative flex items-center cursor-pointer my-auto">
        <Image
          src={airbnb_logo}
          layout="fill"
          objectPosition="left"
          objectFit="contain"
          alt="airbnb logo"
        />
      </div>

      {/* Middle- Search */}
      <div className=" col-span-2 flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          type="text"
          placeholder="Start your search"
          className=" flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400 "
        />
        <SearchIcon className=" hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {/* Right */}
      <div className="flex gap-4 items-center justify-end text-gray-500">
        <p className="hidden lg:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6" />
        <div className="flex items-center gap-2 border-2 rounded-full p-2">
            <MenuIcon className="h-6" />
            <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}
export default Header;
