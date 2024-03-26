import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
export default function AllBookPublisher() {
  return (
    <div className="mt-10 px-3 lg:px-0">
      <div className="container mx-auto ">
        <div className="text-center">
          <h2 className="text-3xl text-[#131313] font-bold">
            Our Top Publisher
          </h2>
          <p className="text-[#9199A6] mt-4">Our Publishers catalog</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
          <div className="bg-white shadow-lg rounded-xl p-9 flex flex-col items-center text-center">
            <div className="w-[100px] h-[100px]">
              <img className="w-full h-full rounded-full" src={"/snx-logo.jpeg"} alt="" />
            </div>
            <h4 className="text-[#131313] text-xl font-bold my-4">
              SNX Publisher
            </h4>
            <p className="text-[#131313CC]">
              Book publishing company SNX is a leading publisher of high-quality
              books for readers...
            </p>
            <div className="flex mt-6 space-x-4 text-2xl cursor-pointer">
              <FaFacebookF></FaFacebookF>
              <FaTwitter></FaTwitter>
              <FaLinkedinIn></FaLinkedinIn>
              <FaInstagram></FaInstagram>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-9 flex flex-col items-center text-center">
            <div className="w-[100px] h-[100px]">
              <img className="w-full h-full rounded-full" src={"/venuxx.jpg"} alt="" />
            </div>
            <h4 className="text-[#131313] text-xl font-bold my-4">
              SNX Publisher
            </h4>
            <p className="text-[#131313CC]">
              Book publishing company SNX is a leading publisher of high-quality
              books for readers...
            </p>
            <div className="flex mt-6 space-x-4 text-2xl cursor-pointer">
              <FaFacebookF></FaFacebookF>
              <FaTwitter></FaTwitter>
              <FaLinkedinIn></FaLinkedinIn>
              <FaInstagram></FaInstagram>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-9 flex flex-col items-center text-center">
            <div className="w-[100px] h-[100px]">
              <img className="w-full h-full rounded-full" src={"/xyz.jpg"} alt="" />
            </div>
            <h4 className="text-[#131313] text-xl font-bold my-4">
              SNX Publisher
            </h4>
            <p className="text-[#131313CC]">
              Book publishing company SNX is a leading publisher of high-quality
              books for readers...
            </p>
            <div className="flex mt-6 space-x-4 text-2xl cursor-pointer">
              <FaFacebookF></FaFacebookF>
              <FaTwitter></FaTwitter>
              <FaLinkedinIn></FaLinkedinIn>
              <FaInstagram></FaInstagram>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
