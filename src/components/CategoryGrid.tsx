"use client";
import React from "react";
import Image from "next/image";

interface Category {
  title: string;
  imageUrl: string;
  link: string;
}

interface CategoryGridProps {
  categories: Category[];
}

const CategoryGrid: React.FC<CategoryGridProps> = ({ categories }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center p-4">
        {categories.map((category, index) => (
          <a
            key={index}
            href={category.link}
            className="bg-white shadow-md rounded-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div className="relative w-full aspect-[5/2]">
              <Image
                src={category.imageUrl}
                alt={category.title}
                layout="fill"
                objectFit="cover"
                className="transition-opacity duration-300 hover:opacity-90"
              />
            </div>
            <div className="p-3 text-center">
              <h3 className="text-md font-semibold text-red-600">
                {category.title}
              </h3>
              <p className="text-gray-500 text-sm">Xem ngay</p>
            </div>
          </a>
        ))}
      </div>

      <div className="flex md:hidden overflow-x-auto gap-4 no-scrollbar min-w-0 p-2">
        {categories.map((category, index) => (
          <a
            key={index}
            href={category.link}
            className="flex-none w-64 bg-white shadow-md rounded-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div className="relative w-full aspect-[5/2]">
              <Image
                src={category.imageUrl}
                alt={category.title}
                layout="fill"
                objectFit="cover"
                className="transition-opacity duration-300 hover:opacity-90"
              />
            </div>
            <div className="p-3 text-center">
              <h3 className="text-md font-semibold text-red-600">
                {category.title}
              </h3>
              <p className="text-gray-500 text-sm">Xem ngay</p>
            </div>
          </a>
        ))}
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default CategoryGrid;
