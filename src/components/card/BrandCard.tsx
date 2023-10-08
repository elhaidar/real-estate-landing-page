import Image from "next/image";

const BrandCard = ({ image }: { image: string }) => {
  return (
    <div className="relative h-16 w-16 opacity-60 grayscale">
      <Image src={image} alt="brand" fill={true} object-fit="contain" />
    </div>
  );
};

export default BrandCard;
