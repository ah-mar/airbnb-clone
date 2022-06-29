import Image from "next/image";
import airbnb_logo from "../public/airbnb_logo.png";
import {
  GlobeAltIcon,
  SearchIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import { useRouter } from "next/router";
import Link from "next/link";

function Header({ placeholder = "Where do you want to go?" }) {
  const [searchInput, setSearchInput] = useState("");
  const [guestCount, setGuestCount] = useState(1);

  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const router = useRouter();

  console.log("date state is", dateRange);
  console.log("guest count is ", guestCount);

  return (
    <header className="sticky top-0 z-50  grid grid-cols-4 bg-white shadow-md p-5 md:p-10">
      {/* Left */}
      <div className="h-10 relative flex items-center cursor-pointer my-auto">
        <Link href="/">
          <Image
            src={airbnb_logo}
            layout="fill"
            objectPosition="left"
            objectFit="contain"
            alt="airbnb logo"
          />
        </Link>
      </div>

      {/* Middle- Search */}
      <div className=" col-span-2 flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder={placeholder}
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
      {searchInput && (
        <div className="flex flex-col col-span-4 mx-auto">
          <DateRangePicker
            onChange={(item) => setDateRange([item.selection])}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={2}
            ranges={dateRange}
            direction="horizontal"
            minDate={new Date()}
            rangeColors={["#fd5861"]}
          />
          <div className="flex items-center border-b mb-4">
            <label
              htmlFor="guests"
              className="inline-block text-2xl flex-grow font-semibold "
            >
              {" "}
              Number of Guests
            </label>
            <UserIcon className="h-5" />
            <input
              type="number"
              id="guests"
              min={1}
              className="w-12 pl-2 text-lg outline-none text-red-400"
              value={guestCount}
              onChange={(e) => setGuestCount(e.target.value)}
            />
          </div>
          <div className="flex border">
            <button onClick={(e) => setSearchInput("")} className="flex-grow">
              Cancel
            </button>
            <button
              onClick={() =>
                router.push({
                  pathname: "search",
                  query: {
                    location: searchInput,
                    guests: guestCount,
                    startDate: dateRange[0].startDate.toISOString(),
                    endDate: dateRange[0].endDate.toISOString(),
                  },
                })
              }
              className="flex-grow"
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
export default Header;
