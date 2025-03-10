"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Category {
  name: string;
  icon: string;
  link: string;
}

const categories: Category[] = [
  { name: "Sofa", icon: "/images/category/sofa.webp", link: "/category/sofa" },
  { name: "Bàn", icon: "/images/category/ban.webp", link: "/category/ban" },
  { name: "Ghế", icon: "/images/category/ghe.webp", link: "/category/ghe" },
  {
    name: "Giường",
    icon: "/images/category/giuong.webp",
    link: "/category/giuong",
  },
  { name: "Nệm", icon: "/images/category/nem.webp", link: "/category/nem" },
  { name: "Đèn", icon: "/images/category/den.webp", link: "/category/den" },
  {
    name: "Lọ hoa",
    icon: "/images/category/lohoa.webp",
    link: "/category/lohoa",
  },
  {
    name: "Khung ảnh",
    icon: "/images/category/khunganh.webp",
    link: "/category/khunganh",
  },
];

const CategorySlider: React.FC = () => {
  return (
    <div className="relative bg-gray-100 py-6 max-w-[1400px] mx-auto mt-4">
      {/* Background */}
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.95)] opacity-55">
        <Image
          src="/images/categorize_img.webp"
          alt="Background"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="flex items-center md:justify-between">
          <div className="hidden md:block text-white font-bold p-6 rounded-lg shadow-lg w-64">
            {/* <h2 className="text-xl font-bold mb-2">Xu hướng tìm kiếm</h2> */}
            <Link href="/trending">
              <button className="bg-red-600 text-white px-4 py-2 rounded-3xl hover:bg-red-700 transition">
                XEM NGAY
              </button>
            </Link>
          </div>

          {/* Danh mục */}
          <div className="flex-1 flex gap-10 overflow-x-auto no-scrollbar">
            {categories.map((category, index) => (
              <Link key={index} href={category.link}>
                <div className="flex flex-col items-center cursor-pointer">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition ">
                    <Image
                      src={category.icon}
                      alt={category.name}
                      width={60}
                      height={60}
                    />
                  </div>
                  <span className="text-sm mt-2 text-black ">
                    {category.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
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

export default CategorySlider;
