import { Link } from "react-router-dom";
import Tag from "../Tag/Tag"
import { FaRegStar } from "react-icons/fa";


export default function Book({book}) {
    const {bookId, bookName, author, rating, category, tags, image} = book
  return (
   <Link to={`/bookDetails/${bookId}`}>
    <div className="border border-[#131313CC] rounded-2xl p-6">
        <div className="bg-[#F3F3F3] rounded-2xl p-8 flex justify-center">
            <img className="h-[166px]" src={image} alt="" />
        </div>
        <div className="flex gap-3">
            {
                tags.map((tag, index) => <Tag key={index} tag={tag}></Tag>)
            }
        </div>
        <h3 className="text-[#131313] text-2xl font-bold mt-4">{bookName}</h3>
        <p className="mt-4 text-[#131313CC] text-base font-medium">by : {author}</p>
        <div className="my-5 border border-dashed border-[#13131326]"></div>
        <div className="flex justify-between items-center">
            <p className="text-[#131313CC] text-base font-medium">{category}</p>
            <p className="text-[#131313CC] text-base font-medium flex items-center gap-2">{rating}<FaRegStar /></p>
        </div>
    </div></Link>
  )
}
