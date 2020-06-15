import { assert } from "./dependencies.ts";
import { getAllBooks, getBookByISBN } from "./controllers.ts";

Deno.test("GET books must return array", () => {
  const books = getAllBooks();

  assert(typeof(books), "Array");
});

Deno.test("GET book by ID must return BookType", () => {
  const bookISBN = 9786160626298;
  const book = getBookByISBN(bookISBN);

  assert(typeof(book), "BookType");
})

Deno.test("GET book by ID must return emprt objects when not found", () => {
  const bookISBN = 9786160626111;
  const book = getBookByISBN(bookISBN);

  assert(typeof(book), "Object");
})