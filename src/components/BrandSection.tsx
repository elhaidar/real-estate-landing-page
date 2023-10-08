import Image from "next/image";
import BrandCard from "./card/BrandCard";

const BrandSection = () => {
  const data = [1, 2, 3, 4, 5];
  return (
    <div className="lg:pt-20 pb-20 lg:pb-10">
      <div className="flex justify-around items-center">
        {data.map((item) => (
          <BrandCard image={`/brand/brand${item}.svg`} key={item} />
        ))}
      </div>
    </div>
  );
};

export default BrandSection;
