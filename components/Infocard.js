import { StarIcon } from "@heroicons/react/solid";
import { HeartIcon } from "@heroicons/react/outline";
import Image from "next/image";

function Infocard(props) {
  const { description, img, lat, long, location, price, star, title, total } =
    props.roomData;

  return (
    <div className="flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          alt={description}
          className="rounded-2xl"
        />
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <p className="text-xl">{title}</p>
        <div className="border-b w-10 p-2"></div>
        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>
        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <StarIcon className="h-7 text-red-400 cursor-pointer" />
            {star}
          </p>
          <div>
            <p className="text-xl font-semibold pb-2 lg:text-2xl">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Infocard;
