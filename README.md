# Book.js
3D book React component. Leverage the [Open Library](https://openlibrary.org/) for book covers, or provide your own book cover images. [GSAP](https://gsap.com/) animation on click and tab interaction. To find a specific book cover, search by title on the Open Library website and grab the Open Library ID.

<img width="917" alt="Screen Shot 2023-10-06 at 1 13 55 AM" src="https://github.com/tannerdolby/tannerdolby.com/assets/48612525/95fd9879-628b-4f48-9987-6984064c520b">


## Examples
```js
import Book from "./components/Book";

function App() {
  return (
    {/* Use Open Library book data */}
    <Book
      title="The Hitch Hiker's Guide to the Galaxy"
      openLibraryId="OL32832269M"
    />
    {/* Provide your own book cover images */}
    <Book
      title="Archimedean Spiral"
      coverUrl="https://tannerdolby.com/images/arc-spiral-large-640.jpeg"
    />
  )
}
```
