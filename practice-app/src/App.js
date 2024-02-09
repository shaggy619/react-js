import "./App.css";

const firstBook = {
  img: "https://m.media-amazon.com/images/I/5112eIqM9pL._SY445_SX342_.jpg",
  title: "The Women",
  author: "Kristin Hannah",
};

const secondBook = {
  img: "https://m.media-amazon.com/images/I/41C-012Es8L._SY445_SX342_.jpg",
  title: "Atomic Habits",
  author: "James Clear",
};

const thirdBook = {
  img: "https://m.media-amazon.com/images/I/41yzzcHjHCL._SY445_SX342_.jpg",
  title: "Psychology of Money",
  author: " Morgan House",
};

function App() {
  return (
    <>
      <h1>Amazon Best Sellers</h1>
      <section className="book-list">
        <Book
          img={firstBook.img}
          title={firstBook.title}
          author={firstBook.author}
        >
          {/* <button>Click Me</button>
          <p>Random Text</p> */}
        </Book>
        <Book
          img={secondBook.img}
          title={secondBook.title}
          author={secondBook.author}
        />
        <Book
          img={thirdBook.img}
          title={thirdBook.title}
          author={thirdBook.author}
        />
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
