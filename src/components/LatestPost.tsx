import React from "react";

interface Post {
  title: string;
  description: string;
  date: string;
  image: string;
  link: string;
}

const posts: Post[] = [
  {
    title:
      "Nến Thơm và Tinh Dầu: Bí Quyết Mang Lại Không Gian Thư Giãn Tuyệt Vời",
    description:
      "Trong cuộc sống hiện đại đầy áp lực, việc tìm kiếm không gian yên bình để thư giãn...",
    date: "13 Tháng 11, 2024",
    image: "/images/blogs/blog1.webp",
    link: "#",
  },
  {
    title: '"Less Is More" - Xu Hướng Tối Giản Trong Không Gian Sống',
    description:
      "Platon, nhà triết học Hy Lạp cổ đại nổi tiếng từng nói: 'Cái đẹp của phong cách...",
    date: "15 Tháng 03, 2024",
    image: "/images/blogs/blog2.webp",
    link: "#",
  },
  {
    title: "Bí Quyết Để Giữ Căn Bếp Luôn Gọn Gàng",
    description:
      "Khu vực bếp là không gian quan trọng cho việc cả gia đình tận hưởng bữa ăn sau một ngày dài...",
    date: "08 Tháng 03, 2024",
    image: "/images/blogs/blog3.webp",
    link: "#",
  },
  {
    title: "Tips Trang Trí Góc Học Tập, Làm Việc Đẹp Và Khoa Học",
    description:
      "Những góc học tập, làm việc được bài trí một cách khoa học và thông minh...",
    date: "01 Tháng 03, 2024",
    image: "/images/blogs/blog4.webp",
    link: "#",
  },
];

const LatestPosts: React.FC = () => {
  return (
    <section className="max-w-[1400px] mx-auto py-10">
      <h2 className="text-2xl font-semibold text-gray-800 flex items-center mb-6">
        <span className="text-red-500 text-xl mr-2">•</span> Bài viết mới nhất
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-80 object-contain"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-[#C31425] line-clamp-2 overflow-hidden text-ellipsis">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2 line-clamp-2 overflow-hidden text-ellipsis">
                {post.description}
              </p>
              <div className="mt-4 flex justify-between items-center text-gray-500 text-xs">
                <span>📅 {post.date}</span>
                <a href={post.link} className="text-gray-600 hover:underline">
                  Xem thêm »
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestPosts;
