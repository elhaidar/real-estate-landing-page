import Image from "next/image";
import BrandSection from "./BrandSection";

const Section2 = () => {
  return (
    <section className="py-20 lg:pt-10 w-full h-full">
      <BrandSection />
      <div className="lg:flex justify-around items-center lg:px-16 relative">
        <div>
          <h2 className="text-2xl lg:text-4xl lg:pr-[30%] font-medium">
            Navigating Your Real Estate Journey
          </h2>
          <p className="text-sm lg:text-base py-6 lg:w-[70%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat esse
            sunt accusantium ut autem expedita repellat vero quae rem assumenda,
            accusamus sapiente nobis tempore voluptatem.
          </p>
          <button className="bg-black rounded-2xl text-white py-3 px-8">
            Contact Us
          </button>
        </div>
        <div className="mt-10 pt-16 h-[70vh] max-w-[500px] mx-auto max-h-[700px] w-full lg:w-full lg:h-[80vh] relative">
          <div className="absolute bg-white top-0 left-[50%] lg:top-[70%] lg:-left-[20%] z-10 p-6 w-44 rounded-2xl">
            <p className="text-primary text-2xl font-bold">22K+</p>
            <p className="text-sm">Property ready to buy and sell</p>
          </div>
          <div className="relative w-full h-full">
            <Image
              src={"/BuildingSection.jpg"}
              alt="img"
              object-fit="contain"
              fill={true}
              className="rounded-3xl"
              sizes="100%"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
