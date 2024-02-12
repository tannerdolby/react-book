import Book from "./Book";

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

const BOOK_LIST = [
    {
      title: "The Hitch Hiker's Guide to the Galaxy",
      id: 'OL32832269M',
    },
    {
      title: "Harry Potter and the Deathly Hallows",
      id: 'OL10506200M',
    },
    {
      title: "Star Wars: Splinter of the Mind's Eye",
      id: 'OL24229002M',
    },
    {
      title: "Star Wars: Heir to the Empire",
      id: 'OL2028412M',
    },
    {
      title: "Star Trek",
      id: 'OL24373163M',
    },
    {
      title: "The Hobbit",
      id: 'OL27289715M',
    },
    {
      title: "The Lion, the Witch and the Wardrobe",
      id: 'OL7265111M',
    }
];
