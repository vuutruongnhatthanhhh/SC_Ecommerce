"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";

interface Product {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  oldPrice?: number;
}

interface ProductCarouselProps {
  title: string;
  products: Product[];
  backgroundColor: string;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({
  title,
  products,
  backgroundColor,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={`${backgroundColor} p-3 rounded-2xl  `}>
      {/* Tiêu đề + Nút điều hướng */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center">
          <span className="text-red-500 text-xl mr-2">•</span> {title}
        </h2>
        <div className="hidden md:flex gap-2">
          {" "}
          {/* Ẩn trên mobile */}
          <button
            onClick={() => scroll("left")}
            className="bg-white shadow-md rounded-full p-2 hover:bg-gray-100 transition"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="bg-white shadow-md rounded-full p-2 hover:bg-gray-100 transition"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Danh sách sản phẩm */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto no-scrollbar gap-4  overflow-y-hidden"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="min-w-[200px] w-[220px] bg-white shadow-md rounded-lg overflow-hidden flex-none transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div className="relative">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={200}
                height={220}
                className="object-cover transition-opacity duration-300 hover:opacity-90"
              />
              {product.oldPrice && (
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  -
                  {Math.round(
                    ((product.oldPrice - product.price) / product.oldPrice) *
                      100
                  )}
                  %
                </div>
              )}
            </div>
            <div className="p-3 text-center">
              <h3 className="text-md font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-red-600 font-bold text-lg">
                {product.price.toLocaleString()}₫
                {product.oldPrice && (
                  <span className="text-gray-500 text-sm line-through ml-2">
                    {product.oldPrice.toLocaleString()}₫
                  </span>
                )}
              </p>
              <button className="mt-2 flex items-center justify-center w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition">
                <ShoppingCart size={16} className="mr-2" /> Thêm vào giỏ
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Nút xem tất cả */}
      <div className="mt-4 text-center">
        <button className="px-6 py-2 bg-white border border-red-500 text-red-600 font-semibold rounded-md hover:bg-red-50">
          Xem tất cả
        </button>
      </div>

      {/* Ẩn thanh cuộn */}
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

export default ProductCarousel;
