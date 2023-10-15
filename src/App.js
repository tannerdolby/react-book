import Book from './components/Book';
import { useState, useEffect } from 'react';

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

function App() {
  const [book, setBook] = useState(BOOK_LIST[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setBook(BOOK_LIST[index % BOOK_LIST.length]);
  }, [index]);

  return (
    <div className='app'>
      <div className='book-demo'>
        <button
          className='next-btn'
          onClick={(_) => {
            setIndex((index + 1) % BOOK_LIST.length);
          }}
        >
          View Next Cover
        </button>
        <Book
          title={book.title}
          openLibraryId={book.id}
        />
      </div>
    </div>
  );
}

export default App;
