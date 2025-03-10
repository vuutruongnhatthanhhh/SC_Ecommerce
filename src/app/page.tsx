import Slider from "@/components/Slider";
import Carousel from "@/components/TechCarousel";
import Courses from "@/components/Courses";
import Blogs from "@/components/Blogs";
import QuoteRequestForm from "@/components/QuoteRequestForm";
import CategoryGrid from "@/components/CategoryGrid";
import ProductCarousel from "@/components/ProductCarousel";
import CouponList from "@/components/CouponList";
import CategorySlider from "@/components/CategorySlider";
import FeaturedProducts from "@/components/FeaturedProducts";
import SaleBanner from "@/components/SaleBanner";
import FeaturedProductRight from "@/components/FeaturedProductRight";
import LatestPosts from "@/components/LatestPost";

export default function Home() {
  const images = ["/images/banner-snake-chain.gif"];

  const courses = [
    {
      title: "Khóa học lập trình React",
      description: "Học React từ cơ bản đến nâng cao",
      imageUrl: "/images/courses/course-reactjs.png",
      link: "/course/react",
    },
    {
      title: "Khóa học lập trình Node.js",
      description: "Lập trình backend với Node.js",
      imageUrl: "/images/courses/course-reactjs.png",
      link: "/course/nodejs",
    },
    {
      title: "Khóa học Python cho người mới bắt đầu",
      description: "Học Python dễ dàng với các bài tập thực hành",
      imageUrl: "/images/courses/course-reactjs.png",
      link: "/course/python",
    },
    {
      title: "Khóa học Machine Learning",
      description: "Khám phá thế giới học máy và AI",
      imageUrl: "/images/courses/course-reactjs.png",
      link: "/course/ml",
    },
  ];

  const blogs = [
    {
      title: "Cách tối ưu SEO với Next.js",
      description: "Tối ưu thứ hạng tìm kiếm google",
      imageUrl: "/images/blogs/blog-nextjs.png",
      link: "/course/react",
    },
    {
      title: "Cách tối ưu SEO với Next.js 2",
      description: "Tối ưu thứ hạng tìm kiếm google",
      imageUrl: "/images/blogs/blog-nextjs.png",
      link: "/course/react",
    },
    {
      title: "Cách tối ưu SEO với Next.js 3",
      description: "Tối ưu thứ hạng tìm kiếm google",
      imageUrl: "/images/blogs/blog-nextjs.png",
      link: "/course/react",
    },
    {
      title: "Cách tối ưu SEO với Next.js 4",
      description: "Tối ưu thứ hạng tìm kiếm google",
      imageUrl: "/images/blogs/blog-nextjs.png",
      link: "/course/react",
    },
  ];

  const categories = [
    {
      title: "Phòng khách",
      imageUrl: "/images/category/phongkhach.png",
      link: "/category/living-room",
    },
    {
      title: "Phòng ngủ",
      imageUrl: "/images/category/phongngu.png",
      link: "/category/bedroom",
    },
    {
      title: "Phòng ăn và bếp",
      imageUrl: "/images/category/phongan.png",
      link: "/category/kitchen",
    },
    {
      title: "Phòng làm việc",
      imageUrl: "/images/category/phonglamviec.png",
      link: "/category/workspace",
    },
  ];

  const products = [
    {
      id: 1,
      name: "Bát cơm sứ trắng hoa",
      imageUrl: "/images/product/product1.png",
      images: [
        "/images/product/product1.png",
        "/images/product/product2.png",
        "/images/product/product3.png",
      ],
      price: 45000,
    },
    {
      id: 2,
      name: "Bát đĩa màu trắng WIN",
      imageUrl: "/images/product/product2.png",
      images: [
        "/images/product/product1.png",
        "/images/product/product2.png",
        "/images/product/product3.png",
      ],
      price: 6450,
      oldPrice: 12900,
    },
    {
      id: 3,
      name: "Bát mì gốm sứ ANNE",
      imageUrl: "/images/product/product3.png",
      images: [
        "/images/product/product1.png",
        "/images/product/product2.png",
        "/images/product/product3.png",
      ],
      price: 79000,
    },
    {
      id: 4,
      name: "Bát mì trắng hoa tiết",
      imageUrl: "/images/product/product4.png",
      images: [
        "/images/product/product1.png",
        "/images/product/product2.png",
        "/images/product/product3.png",
      ],
      price: 129000,
    },
    {
      id: 5,
      name: "Bộ kẹp miệng túi",
      imageUrl: "/images/product/product5.png",
      images: [
        "/images/product/product1.png",
        "/images/product/product2.png",
        "/images/product/product3.png",
      ],
      price: 59000,
    },
    {
      id: 6,
      name: "Bát mì gốm sứ ANNE",
      imageUrl: "/images/product/product1.png",
      images: [
        "/images/product/product1.png",
        "/images/product/product2.png",
        "/images/product/product3.png",
      ],
      price: 79000,
    },
    {
      id: 7,
      name: "Bát mì trắng hoa tiết",
      imageUrl: "/images/product/product2.png",
      images: [
        "/images/product/product1.png",
        "/images/product/product2.png",
        "/images/product/product3.png",
      ],
      price: 129000,
    },
    {
      id: 8,
      name: "Bộ kẹp miệng túi",
      imageUrl: "/images/product/product3.png",
      images: [
        "/images/product/product1.png",
        "/images/product/product2.png",
        "/images/product/product3.png",
      ],
      price: 59000,
    },
  ];

  const products2 = [
    {
      id: 1,
      name: "Bàn học JOY 60 sự lựa chọn hoàn hảo cho trẻ nhỏ",
      imageUrl: "/images/product/product6.png",
      images: [
        "/images/product/product6.png",
        "/images/product/product7.png",
        "/images/product/product8.png",
      ],
      price: 45000,
    },
    {
      id: 2,
      name: "Bàn học JOY 80",
      imageUrl: "/images/product/product7.png",
      images: [
        "/images/product/product6.png",
        "/images/product/product7.png",
        "/images/product/product8.png",
      ],
      price: 45000,
    },
    {
      id: 3,
      name: "Bàn học liền giá sách",
      imageUrl: "/images/product/product8.png",
      images: [
        "/images/product/product6.png",
        "/images/product/product7.png",
        "/images/product/product8.png",
      ],
      price: 45000,
    },
    {
      id: 4,
      name: "Bàn làm việc liền giá sách",
      imageUrl: "/images/product/product9.png",
      images: [
        "/images/product/product6.png",
        "/images/product/product7.png",
        "/images/product/product9.png",
      ],
      price: 45000,
    },
    {
      id: 5,
      name: "Ghê ngồi xoay nâng hạ",
      imageUrl: "/images/product/product10.png",
      images: [
        "/images/product/product6.png",
        "/images/product/product7.png",
        "/images/product/product10.png",
      ],
      price: 45000,
    },
    {
      id: 6,
      name: "Bàn học JOY 60",
      imageUrl: "/images/product/product6.png",
      images: [
        "/images/product/product6.png",
        "/images/product/product7.png",
        "/images/product/product8.png",
      ],
      price: 45000,
    },
    {
      id: 7,
      name: "Bàn học JOY 80",
      imageUrl: "/images/product/product7.png",
      images: [
        "/images/product/product6.png",
        "/images/product/product7.png",
        "/images/product/product8.png",
      ],
      price: 45000,
    },
    {
      id: 8,
      name: "Bàn học liền giá sách",
      imageUrl: "/images/product/product8.png",
      images: [
        "/images/product/product6.png",
        "/images/product/product7.png",
        "/images/product/product8.png",
      ],
      price: 45000,
    },
  ];

  const products3 = [
    {
      id: 1,
      name: "Móc treo rèm phòng tắm RING",
      price: "20,300₫",
      oldPrice: "29,000₫",
      discount: "-30%",
      imageUrl: "/images/product/product11.webp",
    },
    {
      id: 2,
      name: "Cọ Lưng Kèm Bông Tắm Nhựa 2 Đầu SUSANA",
      price: "89,000₫",
      imageUrl: "/images/product/product12.webp",
    },
    {
      id: 3,
      name: "Thảm Phòng Tắm Chất Dãn Hồi Nhiệt Dẻo XYLIA",
      price: "169,000₫",
      imageUrl: "/images/product/product13.webp",
    },
    {
      id: 4,
      name: "Ly Đựng Bàn Chải Nhựa Xanh DARK MINT",
      price: "49,000₫",
      imageUrl: "/images/product/product14.webp",
    },
    {
      id: 5,
      name: "Rèm Tắm DARK MINT L180xW180cm",
      price: "127,200₫",
      oldPrice: "159,000₫",
      discount: "-20%",
      imageUrl: "/images/product/product15.webp",
    },
  ];

  return (
    <div>
      <Slider
        images={[
          {
            desktop: "/images/slider/slider1_desktop.png",
            tablet: "/images/slider/slider1_tablet.png",
            mobile: "/images/slider/slider1_mobile.png",
          },
          {
            desktop: "/images/slider/slider2_desktop.png",
            tablet: "/images/slider/slider2_tablet.png",
            mobile: "/images/slider/slider2_mobile.png",
          },
          {
            desktop: "/images/slider/slider3_desktop.png",
            tablet: "/images/slider/slider3_tablet.png",
            mobile: "/images/slider/slider3_mobile.png",
          },
        ]}
      />

      <CategoryGrid categories={categories} />
      <div className="p-4">
        <ProductCarousel
          title="Đồ bếp nhập khẩu cao cấp"
          products={products}
          backgroundColor="bg-[#ffeef0]"
        />
      </div>
      <div className="p-4">
        <CouponList />

        <ProductCarousel
          title="Back To School - Up To 60%"
          products={products2}
          backgroundColor=""
        />

        <CategorySlider />
        <FeaturedProducts />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 max-w-[1400px] mx-auto mt-10">
          <SaleBanner imageUrl="/images/salebanner/salebanner1.webp" />
          <SaleBanner imageUrl="/images/salebanner/salebanner2.webp" />
        </div>
        <FeaturedProductRight
          title="Chút xinh xắn cho nhà tắm"
          products={products3}
          bannerImageUrl="/images/feature/banner-right.webp"
        />
        <LatestPosts />
      </div>
    </div>
  );
}
