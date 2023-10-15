# Book.js
Reusable component for displaying 3D book UI elements. Users can leverage the [Open Library](https://openlibrary.org/) for book data, or provide your own book cover images. GSAP animation on click or tab interaction.

To find a specific book cover, search by title on the Open Library and grab the Open Library ID.

<img width="917" alt="Screen Shot 2023-10-06 at 1 13 55 AM" src="https://github.com/tannerdolby/eleventy-plugin-metagen/assets/48612525/54f1c51c-120a-487f-a023-d1394354ddd5">


## Examples
```js
import Book from './components/Book';

function App() {
  return (
    {/* Use Open Library book data */}
    <Book
      title="The Hitch Hiker's Guide to the Galaxy"
      openLibraryId='OL32832269M'
    />
    {/* Provide your own book cover images */}
    <Book
      title="Archimedean Spiral"
      coverUrl="https://tannerdolby.com/images/arc-spiral-large-640.jpeg"
    />
  )
}
```
