import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getBooks, getRead } from "../../utility/localStorage";
import ReadBook from "../../components/ReadBook/ReadBook";
import WishlistBook from "../../components/WishlistBook/WishlistBook";
import { IoIosArrowDown } from "react-icons/io";
export default function ListedBooks() {
  const [readBooks, setReadBooks] = useState([]);
  const [books, setBooks] = useState([]);
  const [displayJob, setDisplayJob] = useState([])
  const [displayWishlist, setDisplayWishlist] = useState([])
  useEffect(() => {
    const storedBooks = getRead();
    setReadBooks(storedBooks);
    setDisplayJob(storedBooks)
  }, []);
  useEffect(() => {
    const storedBooks = getBooks();
    setBooks(storedBooks);
    setDisplayWishlist(storedBooks)
  }, []);
  const handleFIlterRead = (filter) => {
    if(filter === 'rating'){
      const ratingFilter = readBooks.sort((a, b) => b.rating - a.rating);
      setDisplayJob([...ratingFilter])
    }
    else if(filter === 'pages'){
      const pagesByFilter = readBooks.sort((a, b) => b.totalPages - a.totalPages)
      setDisplayJob([...pagesByFilter])
    }
    else if(filter === 'year'){
      const yearByFilter = readBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing)
      setDisplayJob([...yearByFilter])
    }
  }
  const handleFIlterWishlist = (filter) => {
    if(filter === 'rating'){
      const ratingFilter = books.sort((a, b) => b.rating - a.rating);
      setDisplayJob([...ratingFilter])
    }
    else if(filter === 'pages'){
      const pagesByFilter = books.sort((a, b) => b.totalPages - a.totalPages)
      setDisplayJob([...pagesByFilter])
    }
    else if(filter === 'year'){
      const yearByFilter = books.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing)
      setDisplayJob([...yearByFilter])
    }
  }



  return (
    <div className="px-3 lg:px-0">
      <div className="bg-[#1313130D] rounded-2xl p-8 text-center mt-8">
        <h4 className="text-[#131313] text-2xl font-bold">Books</h4>
      </div>
      <div className="text-center mt-8">
        <details className="dropdown">
          <summary className="m-1 btn bg-[#23BE0A] text-white hover:bg-[#23BE0A]">Sort By <IoIosArrowDown size={20}></IoIosArrowDown></summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={()=>{
              handleFIlterRead('rating'),
              handleFIlterWishlist('rating')
            }
           }>
              <a>Rating</a>
            </li>
            <li onClick={()=>{
              handleFIlterRead('pages')
              handleFIlterWishlist('pages')
            }}>
              <a>Number of pages</a>
            </li>
            <li onClick={()=>{
              handleFIlterRead('year')
              handleFIlterWishlist('year')
            }}>
              <a>Published year</a>
            </li>
          </ul>
        </details>
      </div>

      <div className="mt-7">
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>
          <TabPanel>
            <div>
              {displayJob.map((read) => (
                <ReadBook key={read.bookId} read={read}></ReadBook>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              {displayWishlist.map((book) => (
                <WishlistBook key={book.bookId} book={book}></WishlistBook>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}
