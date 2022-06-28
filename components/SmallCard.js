import Image from "next/image"

function SmallCard({img, location, distance}) {
  return (
    <div className="flex items-center gap-2 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition duration-150 ease-out ">
{/* Left */}
<div className="relative h-16 w-16">
     <Image src={img}  alt="" layout="fill" className="rounded-lg"/>
</div>
     
      <div>
        <p className="font-bold">{location}</p>
        <p className="text-gray-500">{distance}</p>
      </div>
    </div>
  );
}
export default SmallCard