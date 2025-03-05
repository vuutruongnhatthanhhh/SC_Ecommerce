import Slider from "@/components/Slider";
import Carousel from "@/components/TechCarousel";
import Courses from "@/components/Courses";
import Blogs from "@/components/Blogs";
import QuoteRequestForm from "@/components/QuoteRequestForm";
import CategoryGrid from "@/components/CategoryGrid";
import ProductCarousel from "@/components/ProductCarousel";

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
      imageUrl: "/images/bowl1.jpg",
      price: 45000,
    },
    {
      id: 2,
      name: "Bát đĩa màu trắng WIN",
      imageUrl: "/images/bowl2.jpg",
      price: 6450,
      oldPrice: 12900,
    },
    {
      id: 3,
      name: "Bát mì gốm sứ ANNE",
      imageUrl: "/images/bowl3.jpg",
      price: 79000,
    },
    {
      id: 4,
      name: "Bát mì trắng hoa tiết",
      imageUrl: "/images/bowl4.jpg",
      price: 129000,
    },
    {
      id: 5,
      name: "Bộ kẹp miệng túi",
      imageUrl: "/images/clip.jpg",
      price: 59000,
    },
    {
      id: 6,
      name: "Bát mì gốm sứ ANNE",
      imageUrl: "/images/bowl3.jpg",
      price: 79000,
    },
    {
      id: 7,
      name: "Bát mì trắng hoa tiết",
      imageUrl: "/images/bowl4.jpg",
      price: 129000,
    },
    {
      id: 8,
      name: "Bộ kẹp miệng túi",
      imageUrl: "/images/clip.jpg",
      price: 59000,
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

      <Courses
        courses={courses}
        title="Khóa học nổi bật"
        allCoursesLink="#allcourse"
        showButton={true}
      />
      <QuoteRequestForm />

      <Blogs blogs={blogs} title="Blog" allBlogLink="/blog" showButton={true} />
    </div>
  );
}
