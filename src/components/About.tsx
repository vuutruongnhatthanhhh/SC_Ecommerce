import React from "react";

interface AboutProps {
  // Bạn có thể bổ sung thêm props nếu cần
}

const About: React.FC<AboutProps> = () => {
  return (
    <div className="max-w-[1020px] bg-white py-8 px-4 mx-auto md:px-8 lg:px-16 rounded-2xl">
      {/* Phần tiêu đề */}
      <div className="max-w-screen-lg mx-auto mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-2">
          Giới thiệu
        </h2>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          CÂU CHUYỆN THƯƠNG HIỆU
        </h1>
        <p className="text-gray-700 leading-relaxed">
          Lấy cảm hứng từ loài chim được mệnh danh là “Kiến trúc sư của thiên
          nhiên”, cái tên BAYA đã được lựa chọn để viết tiếp câu chuyện cho
          thương hiệu nội thất hàng đầu Việt Nam.
        </p>
      </div>

      {/* Phần nội dung chính: Tầm nhìn, Sứ mệnh */}
      <div className="max-w-screen-lg mx-auto mb-8 text-gray-700 space-y-4 leading-relaxed">
        <div>
          <h3 className="font-semibold text-lg text-gray-800 mb-1">
            Tầm nhìn:
          </h3>
          <p>
            Trở thành thương hiệu nội thất và trang trí hàng đầu Việt Nam, góp
            phần xây dựng thêm nhiều tổ ấm mới mỗi ngày.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg text-gray-800 mb-1">Sứ mệnh:</h3>
          <p>
            Mang đến những sản phẩm và dịch vụ thiết kế nội thất phù hợp nhất
            cho mọi người.
          </p>
        </div>
      </div>

      {/* Phần "Vì sao nên chọn chúng tôi?" */}
      <div className="max-w-screen-lg mx-auto mb-8">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
          Vì sao nên chọn chúng tôi?
        </h3>
        <div className="space-y-6 text-gray-700">
          <div>
            <h4 className="font-semibold text-red-600 mb-1">
              1. Dịch vụ hậu mãi hấp dẫn
            </h4>
            <p>
              Nội dung mô tả về dịch vụ hậu mãi: Bảo hành, đổi trả, chăm sóc
              khách hàng, v.v.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-red-600 mb-1">
              2. Đội ngũ nhân viên
            </h4>
            <p>
              Tận tâm và không ngừng đổi mới với mong muốn mang lại dịch vụ tốt
              nhất cho khách hàng.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-red-600 mb-1">
              3. Dịch vụ tư vấn &amp; thiết kế nội thất chuyên nghiệp
            </h4>
            <p>
              Thiết kế và thi công trọn gói, chi phí thiết kế tốt nhất thị
              trường, thời gian hoàn thiện nhanh 3-5 ngày.
            </p>
            <p className="text-sm text-gray-500 italic">
              * Đối với các công trình sử dụng đồ có sẵn tại BAYA
            </p>
          </div>
        </div>
      </div>

      {/* Phần hình ảnh minh họa (nếu có) */}
      <div className="max-w-screen-lg mx-auto mb-8">
        <img
          src="/images/baya-showcase.jpg"
          alt="Baya Showcase"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>

      {/* Phần trích dẫn/đoạn giới thiệu cuối */}
      <div className="max-w-screen-lg mx-auto">
        <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
          Đồng hành cùng gia đình Việt
        </h3>
        <blockquote className="text-gray-700 italic border-l-4 border-red-600 pl-4">
          “Trong suốt chặng đường 14 năm của mình, BAYA đã có cơ hội đồng hành
          cùng hàng trăm ngàn khách hàng, chung tay dựng xây nên những gia đình
          trên khắp Việt Nam. Hãy cùng BAYA tiếp tục hành trình kiến tạo nên
          những tổ ấm tươi đẹp, bởi đối với chúng tôi, nhà không chỉ là nơi dừng
          chân mà còn là nơi chứa đựng tình thân, nơi những giá trị văn hóa Việt
          được kế thừa và phát huy.”
        </blockquote>
      </div>
    </div>
  );
};

export default About;
