import Image from "next/image";

const GetStarted = () => {
  return (
    <section className="my-4">
      <div className="h-[80vh] max-h-[700px] p-16 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-80">
          <picture>
            <source srcSet="/Hero.jpg" media="(min-width: 1000px)" />
            <Image
              src={"/HeroMobile.jpg"}
              alt="hero"
              object-fit="cover"
              className="rounded-3xl"
              width={200}
              height={400}
              style={{ width: "100%", height: "100%" }}
            />
          </picture>
        </div>
        <div className="relative flex flex-col items-center justify-center">
          <h1 className="font-medium text-3xl md:text-4xl lg:text-5xl lg:px-[23%] lg:leading-tight px-4">
            Investing In Your Future One Home At A Time
          </h1>
          <p className="py-6 md:w-1/2">
            We{"'"}ll help you find the key to your dream home. Experience the
            joy of homeownership. Let us make your home buying journey simple.
          </p>
          <button className="font-medium rounded-2xl py-3 px-8 border-black border-[1px] lg:my-6">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
