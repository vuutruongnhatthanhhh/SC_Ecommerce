"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Product {
  id: number;
  name: string;
  imageUrl: string;
  images?: string[];
  price: number;
  oldPrice?: number;
  discount?: number;
  brand: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Combo Bát Đĩa Ivy 2",
    imageUrl: "/images/feature/feature1.webp",
    images: [
      "/images/feature/feature1.webp",
      "/images/feature/feature2.jpg",
      "/images/feature/feature3.jpg",
    ],
    price: 1170000,
    brand: "IVY",
  },
  {
    id: 2,
    name: "Combo 2 Tô canh sứ trắng họa tiết H8.5xD20 SAKURA",
    imageUrl: "/images/feature/feature2.jpg",
    images: [
      "/images/feature/feature2.jpg",
      "/images/feature/feature1.webp",
      "/images/feature/feature3.jpg",
    ],
    price: 350000,
    brand: "SAKURA",
  },
  {
    id: 3,
    name: "Combo 2 Tô canh sứ trắng họa tiết H7.2xD18 SAKURA",
    imageUrl: "/images/feature/feature3.jpg",
    images: [
      "/images/feature/feature3.jpg",
      "/images/feature/feature2.jpg",
      "/images/feature/feature1.webp",
    ],
    price: 260000,
    brand: "SAKURA",
  },
  {
    id: 4,
    name: "Combo Bát Đĩa Sakura Họa Tiết Đỏ (6 bát cơm, đĩa, ...)",
    imageUrl: "/images/feature/feature4.webp",
    images: [
      "/images/feature/feature4.webp",
      "/images/feature/feature5.webp",
      "/images/feature/feature6.webp",
    ],
    price: 760000,
    brand: "SAKURA",
  },
  {
    id: 5,
    name: "Combo Bát Đĩa Sakura Xanh Ngọc (6 bát cơm, đĩa, và tất cả những đồ cần thiết",
    imageUrl: "/images/feature/feature5.webp",
    images: [
      "/images/feature/feature5.webp",
      "/images/feature/feature4.webp",
      "/images/feature/feature6.webp",
    ],
    price: 750000,
    brand: "SAKURA",
  },
  {
    id: 6,
    name: "CHINOISE Bình hoa sứ đen/đỏ H31xD25",
    imageUrl: "/images/feature/feature6.webp",
    images: [
      "/images/feature/feature6.webp",
      "/images/feature/feature4.webp",
      "/images/feature/feature5.webp",
    ],
    price: 349300,
    oldPrice: 499000,
    discount: 30,
    brand: "CHINOISE",
  },
  {
    id: 7,
    name: "CHINOISE Bình hoa sứ đen/đỏ H23.5xD25",
    imageUrl: "/images/feature/feature7.webp",
    images: [
      "/images/feature/feature7.webp",
      "/images/feature/feature8.webp",
      "/images/feature/feature10.webp",
    ],
    price: 279300,
    oldPrice: 399000,
    discount: 30,
    brand: "CHINOISE",
  },
  {
    id: 8,
    name: "CHINOISE Bình hoa sứ trắng/đen H23.5xD25",
    imageUrl: "/images/feature/feature8.webp",
    images: [
      "/images/feature/feature8.webp",
      "/images/feature/feature7.webp",
      "/images/feature/feature10.webp",
    ],
    price: 279300,
    oldPrice: 399000,
    discount: 30,
    brand: "CHINOISE",
  },
  {
    id: 9,
    name: "CHINOISE Bình hoa sứ trắng H28xD15",
    imageUrl: "/images/feature/feature10.webp",
    images: [
      "/images/feature/feature10.webp",
      "/images/feature/feature7.webp",
      "/images/feature/feature8.webp",
    ],
    price: 419300,
    oldPrice: 599000,
    discount: 30,
    brand: "CHINOISE",
  },
];

const FeaturedProducts: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    // Nếu product.images có, lấy ảnh đầu tiên. Nếu không, dùng product.imageUrl.
    if (product.images && product.images.length > 0) {
      setSelectedImage(product.images[0]);
    } else {
      setSelectedImage(product.imageUrl);
    }
    setQuantity(1); // Reset số lượng về 1 (tùy ý)
  };

  // Đóng popup
  const handleClosePopup = () => {
    setSelectedProduct(null);
  };

  // Xử lý số lượng
  const handleDecreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    // Không cho về 0 hoặc âm
    if (value >= 1) {
      setQuantity(value);
    } else {
      setQuantity(1);
    }
  };

  return (
    <div className="max-w-[1400px] mx-auto mt-8">
      <h2 className="text-2xl font-semibold text-gray-800 flex items-center mb-6">
        <span className="text-red-500 text-xl mr-2">•</span> Sản phẩm nổi bật
      </h2>
      <div className="grid grid-cols-12">
        {/* Banner bên trái */}
        <div className="col-span-3 relative hidden xl:block">
          <Image
            src="/images/feature/banner_feature_product.webp"
            alt="New Arrivals"
            width={200}
            height={300}
            className="rounded-lg w-[300px] h-[600px]"
          />
        </div>

        {/* Danh sách sản phẩm */}
        <div className="col-span-12 xl:col-span-8 grid grid-cols-2 gap-1 sm:gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white shadow-md rounded-lg overflow-hidden h-[280px] text-xs flex flex-col transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="relative">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={200}
                  height={120}
                  className="object-cover h-[140px] cursor-pointer"
                  onClick={() => handleSelectProduct(product)}
                />
                {product.discount && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] px-1 py-[2px] rounded">
                    -{product.discount}%
                  </span>
                )}
              </div>
              <div className="p-2 text-center">
                <span className="text-gray-500 uppercase text-[10px]">
                  {product.brand}
                </span>
                <h3 className="text-xs font-semibold text-gray-800 line-clamp-2 h-[32px]">
                  {product.name}
                </h3>
                <p className="text-red-600 font-bold text-sm">
                  {product.price.toLocaleString()}₫
                  {product.oldPrice && (
                    <span className="text-gray-500 text-xs line-through ml-1">
                      {product.oldPrice.toLocaleString()}₫
                    </span>
                  )}
                </p>
                <button className="mt-4 flex items-center justify-center w-full bg-red-600 text-white py-1 text-xs rounded-md hover:bg-red-700 transition">
                  <ShoppingCart size={12} className="mr-1" /> Thêm vào giỏ
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <Link href="/#">
          <button className="bg-white border border-red-500 text-red-600 px-6 py-2 rounded-md hover:bg-red-500 hover:text-white transition">
            Xem tất cả
          </button>
        </Link>
      </div>
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 
                       flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={handleClosePopup}
          >
            <motion.div
              className="bg-white rounded-lg p-6 max-w-2xl w-full relative 
                         flex flex-col md:flex-row items-center md:items-start gap-6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                onClick={handleClosePopup}
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
                {/* Thumbnails */}
                {selectedProduct.images &&
                  selectedProduct.images.length > 1 && (
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
                  )}
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
                  <span className="text-[#C31425] font-bold">
                    {selectedProduct.brand}
                  </span>
                </p>
                <p className="text-[#FF0000] text-2xl font-bold mt-2">
                  {selectedProduct.price.toLocaleString()}₫
                  {selectedProduct.oldPrice && (
                    <span className="text-gray-500 text-sm line-through ml-2">
                      {selectedProduct.oldPrice.toLocaleString()} ₫
                    </span>
                  )}
                </p>

                <div className="flex items-center justify-center md:justify-start mt-4 w-full mb-2">
                  <button
                    className="px-3 py-1 bg-gray-200 text-gray-600 text-lg rounded-l-md"
                    onClick={handleDecreaseQuantity}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    min="1"
                    className="w-16 text-center border-2 border-gray-300 py-1"
                    onChange={handleQuantityChange}
                  />
                  <button
                    className="px-3 py-1 bg-gray-200 text-gray-600 text-lg rounded-r-md"
                    onClick={handleIncreaseQuantity}
                  >
                    +
                  </button>
                </div>
                <p className="underline text-sm text-gray-600 cursor-pointer">
                  Xem chi tiết sản phẩm
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      `}</style>
    </div>
  );
};

export default FeaturedProducts;
