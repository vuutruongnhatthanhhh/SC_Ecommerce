import Slider from "@/components/Slider";
import Carousel from "@/components/TechCarousel";
import Courses from "@/components/Courses";
import Blogs from "@/components/Blogs";
import QuoteRequestForm from "@/components/QuoteRequestForm";

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
  return (
    <div>
      <Slider images={images} />

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
