import '../css/index.css';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Book({ title, openLibraryId, coverUrl, coverSize }) {
  const [hasInteraction, setHasInteraction] = useState(false);
  const [cover, setCover] = useState('');
  const bookRef = useRef({});

  useEffect(() => {
    setCover(getCover(openLibraryId, coverSize, coverUrl));
  }, [openLibraryId, coverSize, coverUrl]);

  if (!cover) {
    return '';
  }

  return (
    <div
      className={`book cube ${hasInteraction ? 'active' : ''}`.trim()}
      ref={bookRef}
      title={title}
      tabIndex={0}
      onClick={(e) => {
        setHasInteraction(!hasInteraction);
        handleInteraction(bookRef, hasInteraction);
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          setHasInteraction(!hasInteraction);
          handleInteraction(bookRef, hasInteraction);
        }
      }}
    >
      <div className='cube front'></div>
      <div className='cube back'></div>
      <div className='cube right'></div>
      <div className='cube left'></div>
      <div className='cube top'>
        <img
          className='cover-img'
          width={100}
          height={100}
          src={cover}
          alt={`Book cover for ${title}`}
        />
      </div>
      <div className='cube bottom'></div>
      <div className='cube shadow'></div>
    </div>
  );
}

function handleInteraction(bookRef, hasInteraction) {
  if (hasInteraction) {
    gsap.to(bookRef.current, {
      rotateY: 40,
      rotateX: 30,
      rotateZ: -50,
      translateZ: 10,
      x: 10,
      y: -5,
      duration: .7,
      yoyo: true,
      zIndex: 99
    });
  } else {
    gsap.to(bookRef.current, {
      rotateY: -10,
      rotateX: -5,
      rotateZ: -90,
      translateZ: 50,
      y: -30,
      duration: .7,
      yoyo: true,
      zIndex: 99,
      data: bookRef.current,
    });
  }
}

function getCover(openLibraryId, coverSize, coverUrl) {
  const baseUrl = 'https://covers.openlibrary.org';
  if (openLibraryId) {
    return `${baseUrl}/b/olid/${openLibraryId}-${coverSize || 'L'}.jpg`;
  } else {
    return coverUrl;
  }
}
