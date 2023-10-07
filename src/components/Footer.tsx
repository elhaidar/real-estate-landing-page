import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full mt-auto py-4 bg-black">
      <div className="mx-8 lg:mx-16">
        <div className="lg:flex justify-between lg:border-b-[1px] border-opacity-10 border-white">
          <div>
            <div className="relative w-20 h-20">
              <Image
                src={"/vercelWhite.svg"}
                alt="logo"
                object-fit="cover"
                fill={true}
              />
            </div>
            <p className="text-white opacity-90 w-3/4">
              Investing In Your Future One Home At A Time
            </p>
            <div className="w-full border-white border-opacity-10 border-[1px] rounded-xl flex items-center justify-between px-2 my-8">
              <input
                type="text"
                placeholder="Enter your email"
                className="p-4 bg-transparent w-1/2"
              />
              <button className="py-2 px-6 bg-primary text-white rounded-2xl">
                Subscribe
              </button>
            </div>
          </div>
          <div className="flex flex-wrap justify-between py-8 border-white border-opacity-20 border-y-[1px] lg:border-none">
            <ul className="text-secondary w-1/2 lg:w-1/3">
              <li className="mb-4">Quick Menu</li>
              <li className="mb-4 opacity-60">Home</li>
              <li className="mb-4 opacity-60">Rent</li>
              <li className="mb-4 opacity-60">Sell</li>
              <li className="mb-4 opacity-60">About</li>
              <li className="mb-4 opacity-60">Contact</li>
            </ul>
            <ul className="text-secondary w-1/2 lg:w-1/3">
              <li className="mb-4">About Us</li>
              <li className="mb-4 opacity-60">Payment Plans</li>
              <li className="mb-4 opacity-60">Make saving More</li>
              <li className="mb-4 opacity-60">Tax Calculator</li>
              <li className="mb-4 opacity-60">Talk To Us</li>
            </ul>
            <ul className="text-secondary mt-8 lg:mt-0 lg:w-1/3">
              <li className="mb-4">Contact Info</li>
              <li className="mb-4 opacity-60">
                123 Main Street, Apt 4B Los Angeles , CA 90001, USA
              </li>
              <li className="mb-4 opacity-60">+088 (123) 456-789-232</li>
              <li className="mb-4 opacity-60">company@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center items-center py-8">
          <p className="text-secondary opacity-60">
            &copy; 2023 Haidar All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
