import React from "react";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  price: string;
  oldPrice?: string;
  discount?: string;
  imageUrl: string;
}

interface FeaturedProductRightProps {
  title: string;
  products: Product[];
  bannerImageUrl: string;
}

const FeaturedProductRight: React.FC<FeaturedProductRightProps> = ({
  title,
  products,
  bannerImageUrl,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-[1400px] mx-auto mt-10">
      <h2 className="text-2xl font-semibold text-red-600 flex items-center mb-2">
        <span className="text-red-500 text-xl mr-2">•</span> {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          {products.map((product) => (
            <div key={product.id} className="flex items-center border-b pb-4">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={80}
                height={80}
                className="rounded-lg object-cover"
              />
              <div className="ml-4">
                <p className="text-gray-800 font-semibold line-clamp-2 overflow-hidden text-ellipsis max-h-[3rem] cursor-pointer">
                  {product.name}
                </p>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-red-500 font-bold">
                    {product.price}
                  </span>
                  {product.oldPrice && (
                    <span className="text-gray-400 line-through">
                      {product.oldPrice}
                    </span>
                  )}
                  {product.discount && (
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded w-1/3 md:w-auto text-center">
                      {product.discount}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden md:block">
          <Image
            src={bannerImageUrl}
            alt="Bathroom Sale Banner"
            width={600}
            height={600}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductRight;
