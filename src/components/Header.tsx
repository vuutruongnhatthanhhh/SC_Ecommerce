"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaUser, FaCartPlus } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Link from "next/link";
import AuthForm from "./AuthForm";
import config from "@/config";
import { useAuth } from "@/context/AuthContext";
import SearchBar from "@/components/SearchBar";
import NavCategories from "@/components/NavCategories";

type MenuDataType = {
  [key: string]: {
    name: string;
    link?: string;
    subMenu?: string;
    back?: boolean;
  }[];
};

const Header: React.FC = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [currentMenu, setCurrentMenu] = useState<keyof MenuDataType>("main");

  const menuRef = useRef<HTMLDivElement | null>(null);
  const userMenuRef = useRef<HTMLDivElement | null>(null);
  const toggleButtonRef = useRef<HTMLButtonElement | null>(null);

  const pathname = usePathname();
  const { user, logoutUser } = useAuth();

  // Đóng dropdown khi chuyển route
  // useEffect(() => {
  //   setDropdownVisible(false);
  // }, [pathname]);

  const handleClickMenu = () => {
    setDropdownVisible(!isDropdownVisible);
    // setCurrentMenu("main");
  };

  // Đóng dropdown khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !toggleButtonRef.current?.contains(event.target as Node)
      ) {
        setDropdownVisible(false);
        // setCurrentMenu("main");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Đóng user menu khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target as Node)
      ) {
        setIsUserMenuOpen(false);
      }
    };

    if (isUserMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isUserMenuOpen]);

  const menuData: MenuDataType = {
    main: [
      { name: "Giới thiệu", link: "/about" },
      { name: "Khóa học", subMenu: "courses" },
      { name: "Thiết kế website", link: "/website" },
      { name: "Thiết kế ứng dụng di động", link: "/mobile" },
      { name: "Bảng giá dịch vụ", link: "/price" },
      { name: "Source Code", link: "/sourcecode" },
      { name: "Blog", link: "/blog" },
      { name: "Liên hệ", link: "/contact" },
    ],
    courses: [
      { name: "Quay lại", back: true },
      { name: "Lập trình Frontend", link: "/courses/frontend" },
      { name: "Lập trình Backend", link: "/courses/backend" },
      { name: "Lập trình Mobile", link: "/courses/mobile" },
    ],
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#c4123f] text-white">
        {/*
      ================
      PHẦN HEADER MOBILE
      (< 768px)
      ================
    */}
        <div className="md:hidden p-4 w-full">
          {/* Hàng 1: Menu icon - Logo - User icons */}
          <div className="flex items-center justify-between w-full">
            {/* Bên trái: Menu icon */}
            <button
              ref={toggleButtonRef}
              className="text-white"
              onClick={handleClickMenu}
            >
              ☰
            </button>

            {/* Ở giữa: Logo + Tên công ty */}
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="/images/logo.png"
                alt="Logo"
                className="w-8 h-8 cursor-pointer"
              />
              <span className="text-xl font-semibold">
                {config.companyName}
              </span>
            </Link>

            {/* Bên phải: User icons */}
            <div className="flex items-center space-x-3">
              {user ? (
                <div className="relative" ref={userMenuRef}>
                  <button
                    className="flex items-center"
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  >
                    <FaUser />
                  </button>
                  {isUserMenuOpen && (
                    <div className="absolute right-0 mt-2 bg-gray-800 text-white text-sm rounded-md shadow-lg w-40">
                      <Link
                        href="/userInfo"
                        className="block px-4 py-2 hover:bg-gray-700 transition-colors"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        Thông tin cá nhân
                      </Link>
                      <button
                        onClick={() => {
                          logoutUser();
                          setIsUserMenuOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-700 transition-colors"
                      >
                        Đăng xuất
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <button>
                    <FaCartPlus />
                  </button>
                  <button onClick={() => setIsAuthOpen(true)}>
                    <FaUser />
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Hàng 2: SearchBar */}
          <div className="mt-2">
            <SearchBar />
          </div>
        </div>

        {/* Menu mobile dropdown */}
        <div
          className={`md:hidden fixed top-16 left-0 bg-[#c4123f] text-white text-sm w-64 h-full shadow-lg z-10 transform transition-all duration-300 ${
            isDropdownVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-full pointer-events-none"
          }`}
          ref={menuRef}
        >
          <ul onClick={(e) => e.stopPropagation()}>
            {menuData[currentMenu].map((item, index) => (
              <li key={index} className="border-b border-gray-500">
                {item.back ? (
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Ngăn sự kiện click lan ra ngoài
                      setCurrentMenu("main");
                    }}
                    className="block w-full text-left px-6 py-3 text-white bg-gray-700 hover:bg-gray-600"
                  >
                    ← Quay lại
                  </button>
                ) : item.subMenu ? (
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Ngăn sự kiện lan ra ngoài
                      setCurrentMenu(item.subMenu!);
                    }}
                    className="block w-full text-left px-6 py-3 hover:bg-gray-600"
                  >
                    {item.name} →
                  </button>
                ) : (
                  <Link
                    href={item.link!}
                    className="block px-6 py-3 hover:bg-gray-600"
                    onClick={(e) => {
                      e.stopPropagation(); // Ngăn sự kiện click lan ra ngoài
                      setDropdownVisible(false); // Chỉ đóng menu khi click vào link thực sự
                    }}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/*
      ================
      PHẦN HEADER DESKTOP
      (>= 768px)
      ================
    */}
        <div className="hidden md:flex items-center justify-between px-4 py-3">
          {/* Logo + Tên công ty */}
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="w-8 h-8 cursor-pointer"
            />
            <span className="text-xl font-semibold">{config.companyName}</span>
          </Link>

          {/* SearchBar ở giữa */}
          <div className="w-1/2 px-4">
            <SearchBar />
          </div>

          {/* User/Cart bên phải */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="relative" ref={userMenuRef}>
                <button
                  className="flex items-center"
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                >
                  <FaUser />
                </button>
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 bg-gray-800 text-white text-sm rounded-md shadow-lg w-40">
                    <Link
                      href="/userInfo"
                      className="block px-4 py-2 hover:bg-gray-700 transition-colors"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      Thông tin cá nhân
                    </Link>
                    <button
                      onClick={() => {
                        logoutUser();
                        setIsUserMenuOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-700 transition-colors"
                    >
                      Đăng xuất
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <button>
                  <FaCartPlus />
                </button>
                <button onClick={() => setIsAuthOpen(true)}>
                  <FaUser />
                </button>
              </>
            )}
          </div>
        </div>

        {/* Auth Modal */}
        {isAuthOpen && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setIsAuthOpen(false);
              }
            }}
          >
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
              <button
                onClick={() => setIsAuthOpen(false)}
                className="absolute top-3 right-4 text-gray-600 hover:text-red-500"
              >
                ✕
              </button>
              <div className="w-full">
                <AuthForm onLoginSuccess={() => setIsAuthOpen(false)} />
              </div>
            </div>
          </div>
        )}
        <NavCategories />
      </header>
    </>
  );
};

export default Header;
