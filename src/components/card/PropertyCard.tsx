import Image from "next/image";
import { AiOutlineCar } from "react-icons/ai";
import { BiBath, BiBed } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";
import { PropertyType } from "../Section4";

const PropertyCard = ({ property }: { property: PropertyType }) => {
  return (
    <div className="w-full h-full sm:basis-1/2 lg:basis-1/3 my-2">
      <div className="rounded-3xl bg-white m-2">
        <div className="relative w-full h-[200px] object-contain">
          <Image
            src={property.img}
            alt="hero"
            object-fit="contain"
            className="rounded-3xl"
            fill={true}
            sizes="100%"
          />
        </div>
        <div className="py-4 border-gray-100 border-b-4 px-4">
          <p className="text-xl text-primary font-medium">{`$${property.price}`}</p>
          <p className="font-medium">{property.name}</p>
        </div>
        <div className="p-4">
          <div className="flex items-center gap-1">
            <MdOutlineLocationOn />
            <p>{property.location}</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <BiBed />
              <p>{`${property.bedQty} Bed`}</p>
            </div>
            <div className="flex items-center gap-1">
              <BiBath />
              <p>{`${property.bathQty} Bath`}</p>
            </div>
            <div className="flex items-center gap-1">
              <AiOutlineCar />
              <p>{`${property.parkingQty} Parking`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
