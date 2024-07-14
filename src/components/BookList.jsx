import Book from "./Book";

const BOOK_LIST = [
  {
    title: "The Hitch Hiker's Guide to the Galaxy",
    id: 'OL32832269M',
  },
  {
    title: "Star Trek Log Five",
    id: 'OL24373163M',
  },
  {
    title: "Star Wars: Splinter of the Mind's Eye",
    id: 'OL24229002M',
  },
  {
    title: "Star Trek I",
    id: 'OL7790153M',
  },
  {
    title: "Star Wars: The Last Command",
    id: 'OL1738616M',
  },
  {
    title: "The Hobbit",
    id: 'OL27289715M',
  },
];

export default function BookList() {
    return (
        <ul className="book-list">
          {BOOK_LIST.map((book, i) => {
            return (
              <li key={`${book.title}-${i}`}>
                <Book
                  title={book.title} 
                  openLibraryId={book.id}
                />
              </li>
            )
          })}
        </ul>
    );
}
