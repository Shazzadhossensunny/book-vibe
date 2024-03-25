import { useLoaderData, useParams } from "react-router-dom"
import Tag from "../Tag/Tag"
import { getRead, saveBook, saveRead } from "../../utility/localStorage"


export default function BookDetails() {
    const books = useLoaderData()
    const {bookId} = useParams()
    const book = books.find((book) => book.bookId == bookId)
    const {bookName, author, image, category, review, tags, totalPages, publisher, yearOfPublishing, rating} = book


    const handleWishList = (book) => {
        // saveBook(book)
        let reads =  getRead();
        const isExist = reads.find(r => r.bookId == book.bookId)
        if(isExist){
            saveRead(book)
        }
        else{
            saveBook(book)
        }
    }
    const handleRead = (book) => {
        saveRead(book)

     }




  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-6 lg:mb-12 lg:mt-12 p-3">
        <div className="bg-[#1313130D] rounded-2xl p-8 lg:p-[74px]">
            <img className="rounded-2xl" src={image} alt="" />
        </div>
        <div>
            <h2 className="text-[#131313] text-2xl lg:text-4xl font-bold">{bookName}</h2>
            <h5 className="mt-4 text-[#131313CC] text-lg lg:text-xl font-medium">by : {author}</h5>
            <div className="border border-[#13131326] mt-6"></div>
            <h5 className="mt-4 text-[#131313CC] text-lg lg:text-xl font-medium">{category}</h5>
            <div className="border border-[#13131326] mt-4"></div>
            <p className="text-[#131313b3] mt-6"><strong className="text-[#131313] font-bold">Review :</strong> {review}</p>
            <div className="flex items-center gap-4 flex-wrap">
                <strong className="text-[#131313] font-bold mt-5">Tag</strong>
                {
                    tags.map((tag, index) => <Tag key={index} tag={tag}></Tag>)
                }
            </div>
            <div className="border border-[#13131326] my-6"></div>
            <div className="overflow-x-auto">
                <table className="table">
                    <tbody>
                    <tr>
                        <td className=" lg:w-2/5">Number of Pages:</td>
                        <th>{totalPages}</th>
                    </tr>
                    <tr>
                        <td className=" lg:w-2/5">Publisher:</td>
                        <th>{publisher}</th>
                    </tr>
                    <tr>
                        <td className=" lg:w-2/5">Year of Publishing:</td>
                        <th>{yearOfPublishing}</th>
                    </tr>
                    <tr>
                        <td className=" lg:w-2/5">Rating:</td>
                        <th>{rating}</th>
                    </tr>
                    </tbody>
                </table>
           </div>

           <div className="space-x-4 mt-8">
            <button onClick={()=>handleRead(book)} className="py-2 lg:py-4 px-4 lg:px-7 rounded-lg border border-[#1313134d] text-[#131313] text-lg font-semibold">Read</button>
            <button onClick={()=>handleWishList(book)} className="py-2 lg:py-4 px-4 lg:px-7 rounded-lg bg-[#50B1C9] text-white text-lg font-semibold">Wishlist</button>
           </div>

        </div>
    </div>
  )
}
