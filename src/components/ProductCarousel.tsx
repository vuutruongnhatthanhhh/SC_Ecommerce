"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ShoppingCart, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  imageUrl: string;
  images: string[];
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
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [quantity, setQuantity] = useState(1);

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleQuantityChange = (e: any) => {
    const value = Math.max(1, e.target.value);
    setQuantity(value);
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setSelectedImage(product.imageUrl);
  };

  return (
    <div
      className={`${backgroundColor} p-3 rounded-2xl max-w-[1400px] mx-auto`}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-800 flex items-center mb-2">
          <span className="text-red-500 text-xl mr-2">•</span> {title}
        </h2>
        <div className="hidden md:flex gap-2">
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

      {/* list product */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto no-scrollbar gap-4 overflow-y-hidden"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="min-w-[200px] w-[220px] bg-white shadow-md rounded-lg overflow-hidden flex-none transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div
              className="relative cursor-pointer"
              onClick={() => openModal(product)}
            >
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
              <h3 className="text-md font-semibold text-gray-800 line-clamp-2 overflow-hidden text-ellipsis h-[45px]">
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
      <div className="flex justify-center mt-4">
        <Link href="/#">
          <button className="bg-white border border-red-500 text-red-600 px-6 py-2 rounded-md hover:bg-red-500 hover:text-white transition">
            Xem tất cả
          </button>
        </Link>
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              className="bg-white rounded-lg p-6 max-w-2xl w-full relative flex flex-col md:flex-row items-center md:items-start gap-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                onClick={() => setSelectedProduct(null)}
              >
                <X size={24} />
              </button>

              {/* Main Image */}
              <div className="flex-shrink-0 w-full md:w-1/2 flex flex-col items-center">
                <Image
                  src={selectedImage}
                  alt={selectedProduct.name}
                  width={300}
                  height={300}
                  className="rounded-lg"
                />
                {/* Small image */}
                <div className="flex gap-2 mt-4">
                  {selectedProduct.images.map((img, index) => (
                    <Image
                      key={index}
                      src={img}
                      alt="Thumbnail"
                      width={50}
                      height={50}
                      className={`rounded-lg cursor-pointer border-2 ${
                        selectedImage === img
                          ? "border-red-500"
                          : "border-transparent"
                      }`}
                      onClick={() => setSelectedImage(img)}
                    />
                  ))}
                </div>
              </div>

              {/* Info product */}
              <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                <h2 className="text-2xl mb-2 font-bold text-[#C31425]">
                  {selectedProduct.name}
                </h2>
                <p>
                  Mã sản phẩm:{" "}
                  <span className="text-[#C31425] font-bold">2002527</span>
                </p>
                <p>
                  Tình trạng:{" "}
                  <span className="text-[#C31425] font-bold">Còn hàng</span>
                </p>
                <p>
                  Thương hiệu:{" "}
                  <span className="text-[#C31425] font-bold">ANNE</span>
                </p>
                <p className="text-[#FF0000] text-2xl font-bold mt-2">
                  {selectedProduct.price.toLocaleString()}₫
                  {selectedProduct.oldPrice && (
                    <span className="text-gray-500 text-sm line-through ml-2">
                      {selectedProduct.oldPrice.toLocaleString()} ₫
                    </span>
                  )}
                </p>

                {/* Ô điều chỉnh số lượng */}
                <div className="flex items-center justify-center md:justify-start mt-4 w-full mb-2">
                  <button
                    className="px-3 py-1 bg-gray-200 text-gray-600 text-lg rounded-l-md"
                    onClick={() => handleDecreaseQuantity()}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    min="1"
                    className="w-16 text-center border-2 border-gray-300 no-arrows py-1"
                    onChange={(e) => handleQuantityChange(e)}
                  />
                  <button
                    className="px-3 py-1 bg-gray-200 text-gray-600 text-lg rounded-r-md"
                    onClick={() => handleIncreaseQuantity()}
                  >
                    +
                  </button>
                </div>
                <p className="underline text-sm text-gray-600">
                  Xem chi tiết sản phẩm
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-arrows::-webkit-outer-spin-button,
        .no-arrows::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        .no-arrows {
          -moz-appearance: textfield;
        }
      `}</style>
    </div>
  );
};

export default ProductCarousel;
