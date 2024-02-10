import "./App.css";

const books = [
  {
    img: "https://m.media-amazon.com/images/I/5112eIqM9pL._SY445_SX342_.jpg",
    title: "The Women",
    author: "Kristin Hannah",
    id: 1,
  },

  {
    img: "https://m.media-amazon.com/images/I/41C-012Es8L._SY445_SX342_.jpg",
    title: "Atomic Habits",
    author: "James Clear",
    id: 2,
  },

  {
    img: "https://m.media-amazon.com/images/I/41yzzcHjHCL._SY445_SX342_.jpg",
    title: "Psychology of Money",
    author: " Morgan House",
    id: 3,
  },
];

function App() {
  return (
    <>
      <h1>Amazon Best Sellers</h1>
      <section className="book-list">
        {books.map((book) => {
          return <Book {...book} key={book.id} />;
        })}
      </section>
    </>
  );
}

const Book = (props) => {
  // const { img, title, author, children } = props;
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="Book" />
      <h2>{title}</h2>
      <p>{author}</p>
      {/* <div>{children}</div> */}
    </article>
  );
};

export default App;
