import React from "react";
import { FaSearch, FaTruck, FaStore, FaPhoneAlt } from "react-icons/fa";

interface SearchBarProps {
  onSearch?: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <div>
      <div className="mx-auto max-w-5xl">
        <form
          onSubmit={handleSubmit}
          className="flex items-center bg-white rounded-2xl overflow-hidden"
        >
          <input
            type="text"
            className="flex-1 px-4 py-2 outline-none text-sm text-black"
            placeholder="Tìm kiếm sản phẩm..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            type="submit"
            className=" text-black px-4 py-2 flex items-center justify-center  transition-colors"
          >
            <FaSearch className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-2 hidden min-[1078px]:flex flex-wrap items-center text-white text-sm gap-6">
          <div className="flex items-center">
            <FaTruck className="mr-2 w-4 h-4" />
            <span>Giao hàng toàn quốc</span>
          </div>
          <div className="flex items-center">
            <FaStore className="mr-2 w-4 h-4" />
            <span>Hệ thống cửa hàng</span>
          </div>
          <div className="flex items-center">
            <FaPhoneAlt className="mr-2 w-4 h-4" />
            <span>Hotline: 0911 622 262 (9-21h)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
