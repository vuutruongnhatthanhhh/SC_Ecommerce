"use client";
import React from "react";
import { Copy, Info } from "lucide-react"; // Import icon
import Image from "next/image";

interface CouponProps {
  discount: string;
  condition: string;
  code: string;
  expiry: string;
}

const CouponCard: React.FC<CouponProps> = ({
  discount,
  condition,
  code,
  expiry,
}) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    alert(`Đã sao chép mã: ${code}`);
  };

  return (
    <div className="flex flex-col bg-[#fdf0d1] rounded-xl shadow-md min-w-[280px] w-[90%] sm:w-[350px] md:w-[400px] lg:w-[450px] p-4">
      {/* Icon và nội dung */}
      <div className="flex">
        <div className="bg-[#f1c150] p-4 rounded-xl flex items-center">
          <Image src="/images/coupon.png" alt="Coupon" width={60} height={60} />
        </div>

        <div className="flex-1 pl-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">{discount}</h3>
            {/* <Info
              size={16}
              className="text-gray-600 cursor-pointer hover:text-gray-800"
            /> */}
          </div>
          <p className="text-sm text-gray-600">{condition}</p>
          <p className="text-sm font-bold mt-1">
            Mã: <span className="text-red-600">{code}</span>
          </p>
          <p className="text-xs text-gray-500">HSD: {expiry}</p>
        </div>
      </div>

      {/* Nút sao chép mã nằm dưới */}
      <div className="mt-3 flex justify-center">
        <button
          onClick={copyToClipboard}
          className="bg-red-600 text-white px-4 py-2 text-sm rounded-md hover:bg-red-700 flex items-center w-full justify-center"
        >
          <Copy size={14} className="mr-1" />
          Sao chép mã
        </button>
      </div>
    </div>
  );
};

export default CouponCard;
