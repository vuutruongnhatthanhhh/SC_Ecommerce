import React from "react";
import CouponCard from "./CouponCard";

const coupons = [
  {
    discount: "Giảm 200.000₫",
    condition: "Đơn hàng từ 3 triệu",
    code: "VOUCHERT3-200K",
    expiry: "31/03/2025",
  },
  {
    discount: "Giảm 100.000₫",
    condition: "Đơn hàng từ 2 triệu",
    code: "VOUCHERT3-100K",
    expiry: "31/03/2025",
  },
  {
    discount: "Giảm 50.000₫",
    condition: "Đơn hàng từ 1 triệu",
    code: "VOUCHERT3-50K",
    expiry: "31/03/2025",
  },
];

const CouponList: React.FC = () => {
  return (
    <div className="flex gap-4 overflow-x-auto p-4 max-w-[1400px] mx-auto no-scrollbar">
      {coupons.map((coupon, index) => (
        <CouponCard key={index} {...coupon} />
      ))}
    </div>
  );
};

export default CouponList;
