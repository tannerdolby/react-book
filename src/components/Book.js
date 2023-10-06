import '../css/index.css';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import OpenLibrary from '../open-library/OpenLibrary';

export default function Book({ book }) {
  const [cover, setCover] = useState('');
  const [hasInteraction, setHasInteraction] = useState(false);
  const [tween, setTween] = useState(null);
  const bookRef = useRef(null);

  useEffect(() => {
    const openLibrary = new OpenLibrary();
    (async () => {
      const coverUrl = await openLibrary.getCover(book);
      setCover(coverUrl || book.coverUrl);
    })();
  });

  useEffect(() => {
    setTween(gsap.to(bookRef.current, {
      rotateY: -10,
      rotateX: -5,
      rotateZ: -90,
      translateZ: 50,
      y: -30,
      duration: .7,
      yoyo: true,
      paused: true,
      zIndex: 99
    }))
  }, [bookRef])

  return (
    <div
      className='book cube'
      ref={bookRef}
      title={book.title}
      tabIndex={0}
      onClick={(e) => {
        handleInteraction(hasInteraction, tween, setHasInteraction);
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          handleInteraction(hasInteraction, tween, setHasInteraction);
        }
      }}
    >
      <div className='cube front'></div>
      <div className='cube back'></div>
      <div className='cube right'></div>
      <div className='cube left'></div>
      <div
        className='cube top'
        style={{ backgroundImage: `url(${cover})` }}
      ></div>
      <div className='cube bottom'></div>
      <div className='cube shadow'></div>
    </div>
  );
}

function handleInteraction(hasInteraction, tween, setHasInteraction) {
  tween.play();
  if (hasInteraction) {
    tween.reverse();
  }
  setHasInteraction(!hasInteraction);
}
