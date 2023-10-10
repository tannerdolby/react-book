# Book.js
Reusable component for displaying 3D book UI elements. Users can leverage the [Open Library](https://openlibrary.org/) APIs for book data, or provide their own book cover URLs. GSAP animation on click or tab interaction.

<img width="917" alt="Screen Shot 2023-10-06 at 1 13 55 AM" src="https://github.com/tannerdolby/eleventy-plugin-metagen/assets/48612525/54f1c51c-120a-487f-a023-d1394354ddd5">


## Examples
```js
import Book from './components/Book';

function App() {
  return (
    {/* Using Open Library book data */}
    <Book
      title="The Hitch Hiker's Guide to the Galaxy"
      openLibraryId={11464254}
    />
    {/* Or by providing your own book cover images */}
    <Book
      title="Archimedean Spiral"
      coverUrl="https://tannerdolby.com/images/arc-spiral-large-640.jpeg"
    />
  )
}
```
