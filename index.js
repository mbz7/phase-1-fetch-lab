function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())
    .then((json) => renderBooks(json));
  // To pass the tests, don't forget to return your fetch!
}

function renderBooks(books) {
  const main = document.querySelector("main");
  books.forEach((book) => {
    const h2 = document.createElement("h2");
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

function fetchBooksSecond() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())
    .then((json) => renderFifth(json));
  // To pass the tests, don't forget to return your fetch!
}

function renderFifth(list) {
  const main = document.querySelector("main");
  const fifth = list[4];
  const h1 = document.createElement("h1");
  h1.innerHTML = fifth.name;
  main.appendChild(h1);
}

document.addEventListener("DOMContentLoaded", function () {
  fetchBooks();
  fetchBooksSecond();
});
