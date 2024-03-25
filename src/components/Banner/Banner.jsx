import { Link } from "react-router-dom";


export default function Banner() {
  return (
    <div className="flex flex-col lg:flex-row justify-between px-5 lg:px-28 bg-[#1313130D] rounded-3xl items-center py-7 lg:py-20 mt-0 lg:mt-12">
        <div className="text-center lg:text-left">
            <h1 className="text-[#131313] text-3xl lg:text-5xl font-bold lineHeight">Books to freshen up <br /> your bookshelf</h1>
            <Link to={'/listedBooks'} className="bg-[#23BE0A] rounded-lg px-4 lg:px-7 py-2 lg:py-5 text-lg lg:text-xl font-bold text-white inline-block mt-6 lg:mt-12">View The List</Link>
        </div>
        <div className="mt-6 lg:mt-0">
            <img src={'/bannerbg.png'} alt="" />
        </div>
    </div>
  )
}
