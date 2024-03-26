import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getBooks, getRead } from "../../utility/localStorage";
import ReadBook from "../../components/ReadBook/ReadBook";
import WishlistBook from "../../components/WishlistBook/WishlistBook";
export default function ListedBooks() {
  const [readBooks, setReadBooks] = useState([]);
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const storedBooks = getRead();
    setReadBooks(storedBooks);
  }, []);
  useEffect(() => {
    const storedBooks = getBooks();
    setBooks(storedBooks);
  }, []);
  return (
    <div className="px-3 lg:px-0">
      <div className="bg-[#1313130D] rounded-2xl p-8 text-center mt-8">
        <h4 className="text-[#131313] text-2xl font-bold">Books</h4>
      </div>
      <div className="text-center mt-8">
        <details className="dropdown">
          <summary className="m-1 btn">Sort By</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a>Rating</a>
            </li>
            <li>
              <a>Number of pages</a>
            </li>
            <li>
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
              {readBooks.map((read) => (
                <ReadBook key={read.bookId} read={read}></ReadBook>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              {books.map((book) => (
                <WishlistBook key={book.bookId} book={book}></WishlistBook>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}
