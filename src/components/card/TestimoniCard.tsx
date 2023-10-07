import { BiSolidQuoteAltLeft } from "react-icons/bi";
import Image from "next/image";

const TestimoniCard = ({ data }: { data: string }) => {
  return (
    <div className="p-8 border-black border-opacity-20 rounded-xl border-[1px] min-w-[70vw] md:min-w-[40%] w-full">
      <BiSolidQuoteAltLeft className="text-primary" size="2em" />
      <p className="py-6 text-sm opacity-75">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quisquam
        illum magnam delectus aperiam, mollitia quasi, eligendi ut saepe rem
        blanditiis eaque error inventore excepturi nulla minus officiis quas
        sequi!
      </p>
      <div className="flex items-center gap-4">
        <div className="w-16 h-16">
          <Image
            src={data}
            alt="people"
            width={80}
            height={80}
            className="object-cover object-center w-full h-full rounded-full"
          />
        </div>
        <div>
          <p className="font-medium">Arefin Shuvo</p>
          <p className="text-sm opacity-50">CEO, NoonBrew</p>
        </div>
      </div>
    </div>
  );
};

export default TestimoniCard;
