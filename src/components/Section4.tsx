import Image from "next/image";
import { MdOutlineLocationOn } from "react-icons/md";
import { BiBed, BiBath } from "react-icons/bi";
import { AiOutlineCar } from "react-icons/ai";
import PropertyCard from "./card/PropertyCard";

export interface PropertyType {
  id: Number;
  img: string;
  price: Number;
  name: string;
  location: string;
  bedQty: Number;
  bathQty: Number;
  parkingQty: Number;
}

const property = [
  {
    id: 1,
    img: "/building1.jpg",
    price: 550000,
    name: "The Bismillah Apartment",
    location: "Jakarta, Indonesia",
    bedQty: 4,
    bathQty: 2,
    parkingQty: 1,
  },
  {
    id: 2,
    img: "/building2.jpg",
    price: 550000,
    name: "The Bismillah Apartment",
    location: "Jakarta, Indonesia",
    bedQty: 4,
    bathQty: 2,
    parkingQty: 1,
  },
  {
    id: 3,
    img: "/building3.jpg",
    price: 550000,
    name: "The Bismillah Apartment",
    location: "Jakarta, Indonesia",
    bedQty: 4,
    bathQty: 2,
    parkingQty: 1,
  },
  {
    id: 4,
    img: "/building1.jpg",
    price: 550000,
    name: "The Bismillah Apartment",
    location: "Jakarta, Indonesia",
    bedQty: 4,
    bathQty: 2,
    parkingQty: 1,
  },
  {
    id: 5,
    img: "/building2.jpg",
    price: 550000,
    name: "The Bismillah Apartment",
    location: "Jakarta, Indonesia",
    bedQty: 4,
    bathQty: 2,
    parkingQty: 1,
  },
  {
    id: 6,
    img: "/building3.jpg",
    price: 550000,
    name: "The Bismillah Apartment",
    location: "Jakarta, Indonesia",
    bedQty: 4,
    bathQty: 2,
    parkingQty: 1,
  },
];

const Section4 = () => {
  return (
    <section className="mb-8">
      <div className="text-center w-full flex flex-col justify-center items-center">
        <h2 className="text-2xl lg:text-4xl font-medium">
          Our Popular Property
        </h2>
        <p className="py-4 lg:py-8 text-sm lg:w-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          quaerat mollitia dolor necessitatibus quis, numquam illo.
        </p>
      </div>
      <div className="py-8 flex flex-wrap w-full">
        {property.map((item) => (
          <PropertyCard key={item.id} property={item} />
        ))}
      </div>
      <div className="flex justify-center">
        <button className="text-secondary bg-black py-3 px-8 rounded-xl">
          Explore All Property
        </button>
      </div>
    </section>
  );
};

export default Section4;
