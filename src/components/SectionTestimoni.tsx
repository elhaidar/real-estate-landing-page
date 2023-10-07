import { BiSolidQuoteAltLeft } from "react-icons/bi";
import Image from "next/image";
import TestimoniCard from "./card/TestimoniCard";

const data = [1, 2, 3];

const SectionTestimoni = () => {
  return (
    <section className="bg-white py-16">
      <div className="mx-8">
        <h2 className="text-2xl lg:text-4xl lg:px-[35%] text-center px-4 font-medium leading-tight">
          Kind Words From Our Happy Customers
        </h2>
        <div className="flex items-center gap-4 my-8 lg:my-14 lg:pb-8 overflow-auto pb-4">
          {data.map((item) => (
            <TestimoniCard data={`/people${item}.jpg`} key={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionTestimoni;
