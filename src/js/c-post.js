const BASE_URL = 'http://localhost:3000';

const newBook = {
  title: "Test book on CSS",
  author: "Me",
  genres: ["CSS"],
  rating: 9,
};

function addBook(book) {
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(book),
};
  return fetch(`${BASE_URL}/books`, options)
    .then(res => res.json());
}

addBook(newBook).then(renderBook);

addBook({
  title: "Test book on HTML",
  author: "Me",
  genres: ["HTML"],
  rating: 7,
}).then(renderBook).catch(error=>console.log(error));

function renderBook(book) {
    console.log("A reply from backend has come - you can draw!");
  console.log(book);
}