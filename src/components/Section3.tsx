import Image from "next/image";

const Section3 = () => {
  return (
    <section className="bg-black lg:pt-8">
      <div className="flex flex-wrap w-full border-secondary border-b-[1px] border-opacity-50 py-8">
        <div className="flex items-center w-full lg:w-1/3 px-2 py-4">
          <h3 className="font-medium text-3xl text-secondary lg:text-5xl">
            11K+
          </h3>
          <p className="text-sm text-secondary opacity-50 py-2 px-4 lg:w-1/2">
            Happy Customers with our services
          </p>
        </div>
        <div className="flex items-center w-full lg:w-1/3 px-2 py-4">
          <h3 className="font-medium text-3xl text-secondary lg:text-5xl">
            22K+
          </h3>
          <p className="text-sm text-secondary opacity-50 py-2 px-4 lg:w-1/2">
            The best property we provide
          </p>
        </div>
        <div className="flex items-center w-full lg:w-1/3 px-2 py-4">
          <h3 className="font-medium text-3xl text-secondary lg:text-5xl">
            520+
          </h3>
          <p className="text-sm text-secondary opacity-50 py-2 px-4 lg:w-1/2">
            Awesome companies believe in us
          </p>
        </div>
      </div>
      <div className="mt-4 py-4 lg:py-12">
        <div className="lg:flex justify-between w-full">
          <h2 className="text-secondary text-xl lg:text-4xl lg:w-2/5">
            Where Comfort Meets Convenience
          </h2>
          <p className="text-secondary opacity-50 text-sm py-4 lg:w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque rerum
            illum laborum doloribus veritatis ea harum ut quo eos sapiente,
            cupiditate aut dolor quia cum similique aperiam, sequi, assumenda
            perferendis.
          </p>
        </div>
        <div className="h-[20vh] max-h-[200px]"></div>
      </div>
    </section>
  );
};

export default Section3;
