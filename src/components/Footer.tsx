"use client";

import React from "react";
import Link from "next/link";
import { FaFacebook, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-8 text-gray-700 w-full">
      <div className="container mx-auto px-4">
        {/* Newsletter & Social Media */}
        {/* Newsletter & Social Media */}
        <div className="mb-8 flex flex-col md:flex-row justify-between items-center">
          {/* <div className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
            <h3 className="font-semibold text-xl">Đăng ký nhận tin</h3>
          </div> */}
          <div className="flex flex-col md:flex-row items-center w-full md:w-auto space-y-2 md:space-y-0 md:space-x-2">
            <input
              type="email"
              placeholder="Nhập email của bạn"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring w-full md:w-auto"
            />
            <button className="bg-red-600 text-white px-6 py-2 rounded-2xl w-full md:w-auto">
              Đăng ký nhận tin
            </button>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <h3 className="font-semibold text-xl mr-2">
              Kết nối với chúng tôi
            </h3>
            <Link
              href="https://www.facebook.com/profile.php?id=61573199592592"
              className="text-gray-700 text-2xl"
              target="_blank"
            >
              <FaFacebook />
            </Link>
            <Link
              href="https://www.youtube.com/@SnakeChain2801"
              className="text-gray-700 text-2xl"
              target="_blank"
            >
              <FaYoutube />
            </Link>
          </div>
        </div>

        <hr className="border-gray-300 my-6 mb-6" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-semibold text-lg">TẬP ĐOÀN SNAKE CHAIN</h3>
            <p>
              🏠 SNAKE CHAIN Thủ Đức: 20 Nguyễn Cơ Thạch, P. An Lợi Đông, TP Thủ
              Đức.
            </p>
            <p>
              📍 SNAKE CHAIN Hà Nội: Tòa nhà Luxury Park Views, D32 KĐT mới Cầu
              Giấy.
            </p>
            <p>📞 0911 622 262</p>
            <p>📧 vuutruongnhatthanh@gmail.com</p>
          </div>

          {/* About*/}
          <div>
            <h3 className="font-semibold text-lg">Về SNAKE CHAIN</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#">Giới thiệu</Link>
              </li>
              <li>
                <Link href="#">Liên hệ</Link>
              </li>
              <li>
                <Link href="#">Blog</Link>
              </li>
              <li>
                <Link href="#">Hệ thống cửa hàng</Link>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="font-semibold text-lg">Hỗ trợ khách hàng</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#">Câu hỏi thường gặp</Link>
              </li>
              <li>
                <Link href="#">Hướng dẫn đặt hàng</Link>
              </li>
              <li>
                <Link href="#">Mua hàng trả góp</Link>
              </li>
              <li>
                <Link href="#">Hướng dẫn thanh toán VNPAY-QR</Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="font-semibold text-lg">Chính sách</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#">Chính sách bảo hành</Link>
              </li>
              <li>
                <Link href="#">Chi phí vận chuyển</Link>
              </li>
              <li>
                <Link href="#">Chính sách đổi trả và hoàn tiền</Link>
              </li>
              <li>
                <Link href="#">Chính sách vận chuyển và giao nhận</Link>
              </li>
              <li>
                <Link href="#">Các hình thức thanh toán</Link>
              </li>
              <li>
                <Link href="#">Chính sách bảo mật thông tin</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>© 2025 Snake Chain. Được lấy ý tưởng từ Baya.vn</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
