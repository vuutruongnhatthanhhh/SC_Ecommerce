import React from "react";
import Image from "next/image";

interface SaleBannerProps {
  imageUrl: string;
}

const SaleBanner: React.FC<SaleBannerProps> = ({ imageUrl }) => {
  return (
    <div className="relative w-full overflow-hidden rounded-lg group cursor-pointer">
      <Image
        src={imageUrl}
        alt={""}
        width={500}
        height={300}
        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-300"></div>
    </div>
  );
};

export default SaleBanner;
