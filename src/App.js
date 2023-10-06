import Book from './components/Book';
import { BOOK_LIST } from './open-library/constants';
import { useState, useEffect } from 'react';

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
        <Book book={book} />
      </div>
    </div>
  );
}

export default App;
