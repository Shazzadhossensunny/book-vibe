
export const getBooks = () => {
    let books = []
    const storedBooks = localStorage.getItem('books')
    if(storedBooks){
        books = JSON.parse(storedBooks)
    }
    return books
}

// save

export const saveBook = book => {
    let books = getBooks()
    const isExist = books.find(b => b.bookId == book.bookId)
    if(isExist){
        return alert('Already Bookmarked!')
    }
    books.push(book)
    localStorage.setItem('books', JSON.stringify(books))
    alert('Blog Bookmarked Successfully!')
}
// read
export const getRead = () => {
    let reads = []
    const storedReads = localStorage.getItem('reads')
    if(storedReads){
        reads = JSON.parse(storedReads)
    }
    return reads
}

// save

export const saveRead = book => {
    let reads = getRead()
    const isExist = reads.find(r => r.bookId == book.bookId)
    if(isExist){
        return alert('Already Bookmarked!')
    }
    reads.push(book)
    localStorage.setItem('reads', JSON.stringify(reads))
    alert('Blog Bookmarked Successfully!')
}