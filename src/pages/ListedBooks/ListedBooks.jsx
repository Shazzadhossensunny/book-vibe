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
    const storedReadBooks = getRead();
    setReadBooks(storedReadBooks);
    setDisplayJob(storedReadBooks)
  }, []);
  useEffect(() => {
    const storedWishlistBooks = getBooks();
    setBooks(storedWishlistBooks);
    setDisplayWishlist(storedWishlistBooks)
  }, []);
  const handleFilterRead = (filter) => {
    let filteredBooks = [...readBooks];
    if (filter === 'rating') {
      filteredBooks.sort((a, b) => b.rating - a.rating);
    } else if (filter === 'pages') {
      filteredBooks.sort((a, b) => b.totalPages - a.totalPages);
    } else if (filter === 'year') {
      filteredBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    }
    setDisplayJob(filteredBooks);
  };

  const handleFilterWishlist = (filter) => {
    let filteredBooks = [...books];
    if (filter === 'rating') {
      filteredBooks.sort((a, b) => b.rating - a.rating);
    } else if (filter === 'pages') {
      filteredBooks.sort((a, b) => b.totalPages - a.totalPages);
    } else if (filter === 'year') {
      filteredBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    }
    setDisplayWishlist(filteredBooks);
  };



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
              handleFilterRead('rating'),
              handleFilterWishlist('rating')
            }
           }>
              <a>Rating</a>
            </li>
            <li onClick={()=>{
              handleFilterRead('pages')
              handleFilterWishlist('pages')
            }}>
              <a>Number of pages</a>
            </li>
            <li onClick={()=>{
              handleFilterRead('year')
              handleFilterWishlist('year')
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
