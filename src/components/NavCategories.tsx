"use client"; // Nếu bạn đang dùng app router (Next.js 13+), để đảm bảo component render client-side

import React from "react";
import Link from "next/link";

interface Category {
  label: string;
  href?: string; // Link nếu cần
  subcategories?: SubCat[]; // Mảng subcategory nếu có
}

interface SubCat {
  label: string;
  href?: string;
}

const categories: Category[] = [
  {
    label: "SOFA - GHẾ THƯ GIÃN",
    href: "#",
  },
  {
    label: "BÀN",
    href: "#",
  },
  {
    label: "GHẾ",
    href: "#",
    subcategories: [
      { label: "Ghế ăn", href: "#" },
      { label: "Ghế đôn", href: "#" },
      { label: "Ghế văn phòng", href: "#" },
      { label: "Ghế bập bênh", href: "#" },
      { label: "Ghế em bé", href: "#" },
      { label: "Ghế thư giãn", href: "#" },
    ],
  },
  {
    label: "GIƯỜNG NGỦ",
    href: "#",
  },
  {
    label: "CHĂN GA GỐI",
    href: "#",
  },
  {
    label: "TỦ KỆ",
    href: "#",
  },
  {
    label: "NỘI THẤT VĂN PHÒNG",
    href: "#",
  },
  {
    label: "TRANG TRÍ",
    href: "#",
  },
  {
    label: "NHÀ BẾP",
    href: "#",
  },
  {
    label: "PHÒNG TẮM",
    href: "#",
  },
];

const NavCategories: React.FC = () => {
  return (
    <nav className=" bg-white shadow hidden md:block">
      {/* Container */}
      <div className="mx-auto max-w-7xl px-4">
        {/* Thanh menu ngang */}
        <ul className="flex flex-wrap text-sm font-semibold text-gray-700 py-2 gap-4">
          {categories.map((cat) => (
            <li key={cat.label} className="relative group ">
              {/* Link cha */}
              <Link
                href={cat.href || "#"}
                className="py-2 px-2 hover:text-red-500 transition-colors"
              >
                {cat.label}
                {cat.subcategories && (
                  <span className="ml-1 text-xs " style={{ fontSize: "9px" }}>
                    ▼
                  </span>
                )}
              </Link>

              {/* Nếu có subcategories, hiển thị dropdown */}
              {cat.subcategories && (
                <div
                  className="absolute left-0 top-full mt-1 hidden w-48 bg-white border border-gray-200 rounded shadow-lg group-hover:block
                             z-10"
                >
                  <ul className="py-2">
                    {cat.subcategories.map((sub) => (
                      <li key={sub.label}>
                        <Link
                          href={sub.href || "#"}
                          className="block px-4 py-2 hover:bg-gray-100 hover:text-red-500"
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavCategories;
