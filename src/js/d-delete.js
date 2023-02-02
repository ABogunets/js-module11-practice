const BASE_URL = 'http://localhost:3000';


function deleteBookById(bookId) {
  const url = `${BASE_URL}/books/${bookId}`;
  const options = {
  method: 'DELETE',
  };
  return fetch(url, options)
    .then(res => res.json());
}
deleteBookById(1);
deleteBookById(2);