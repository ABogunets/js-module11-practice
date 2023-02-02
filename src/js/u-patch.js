const BASE_URL = 'http://localhost:3000';

function updateBookById(update, bookId) {
  const options = {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(update),
  };
  return fetch(`${BASE_URL}/books/${bookId}`, options)
    .then(res => res.json())
}

updateBookById({ title: 'Big new test book on NODEJS' }, 54);
updateBookById({ rating: 20 }, 53);