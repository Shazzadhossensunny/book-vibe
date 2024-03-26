import Tag from "../Tag/Tag";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdOutlineContactPage } from "react-icons/md";
import { Link } from "react-router-dom";

export default function ReadBook({ read }) {
  const {
    image,
    bookName,
    author,
    tags,
    yearOfPublishing,
    publisher,
    totalPages,
    category,
    rating,
    bookId,
  } = read;
  return (
    <div className="border border-[#13131399] rounded-2xl p-6 flex flex-col lg:flex-row gap-6 mt-8">
      <div className="bg-[#1313130D] rounded-2xl p-7">
        <img className="h-[172px] mx-auto rounded-2xl" src={image} alt="" />
      </div>
      <div className="flex-1">
        <h3 className="text-[#131313] text-2xl font-bold">{bookName}</h3>
        <p className="mt-4 text-[#131313CC] font-medium">By : {author}</p>
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex flex-wrap items-center gap-4">
            <strong className="mt-5">Tag</strong>
            {tags.map((tag, index) => (
              <Tag key={index} tag={tag}></Tag>
            ))}
          </div>
          <div className="flex items-center gap-2 mt-5">
            <IoLocationOutline className="text-xl"></IoLocationOutline>
            <p className="text-[#131313CC]">
              Year of Publishing: {yearOfPublishing}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-4 mt-4">
          <div className="flex items-center gap-2">
            <HiOutlineUsers className="text-xl"></HiOutlineUsers>
            <p className="text-[#131313CC]">Publisher: {publisher}</p>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineContactPage className="text-xl"></MdOutlineContactPage>
            <p className="text-[#131313CC]">Page {totalPages}</p>
          </div>
        </div>
        <div className="border border-[#13131326] my-4"></div>
        <div className="space-x-3 space-y-3 lg:space-y-0">
          <div className="badge bg-[#328eff26] p-4 text-[#328EFF]">
            Category: {category}
          </div>
          <div className="badge bg-[#ffac3326] p-4 text-[#FFAC33]">
            Rating: {rating}
          </div>
          <Link to={`/bookDetails/${bookId}`} className="badge bg-[#23BE0A] p-4 text-white">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
