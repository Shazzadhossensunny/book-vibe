import Banner from "../../components/Banner/Banner";
import Books from "../../components/Books/Books";


export default function Home() {
  return (
    <div className="mt-4">
        <Banner></Banner>
        <div className="my-10 lg:my-24 px-3 lg:px-0">
        <div className="text-center">
            <h2 className="text-[#131313] text-2xl lg:text-4xl font-bold">Books</h2>
        </div>
        <Books></Books>
        </div>
    </div>
  )
}
