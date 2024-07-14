# Book.js
3D book React component. Leverage the [Open Library](https://openlibrary.org/) for book covers, or provide your own book cover images. [GSAP](https://gsap.com/) animation on click and tab interaction. To find a specific book cover, search by title on the Open Library website and grab the Open Library ID.

<img width="1264" alt="3D CSS Books Demo" src="https://github.com/user-attachments/assets/f3caaaa5-5861-43a1-9923-ab9348cbd6ea">


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
