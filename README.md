# Book.js
Reusable component for displaying 3D book UI elements. Users can leverage the [Open Library](https://openlibrary.org/) APIs for book data, or provide their own book cover URLs. GSAP animation on click or tab interaction. Feel free to fork this repo or directly grab a copy of [Book.js](https://github.com/tannerdolby/react-book/blob/main/src/components/Book.js)

<img width="917" alt="Screen Shot 2023-10-06 at 1 13 55 AM" src="https://github.com/tannerdolby/eleventy-plugin-metagen/assets/48612525/54f1c51c-120a-487f-a023-d1394354ddd5">


## Examples
Leveraging Open Library book data:

```js
import {Book} from 'book.js';

function App({}) {
  return (
    <Book
      book={{
        title: "The Hitch Hiker's Guide to the Galaxy",
        id: 11464254,
        size: "L"
      }}
    />
  )
}
```

Or by providing your own book cover images:

```js
import {Book} from 'book.js';

function App({}) {
  return (
    <Book
      book={{
        title: "Archimedean Spiral",
        coverUrl: "https://tannerdolby.com/images/arc-spiral-large-640.jpeg"
      }}
    />
  )
}
```
