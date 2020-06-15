import BookType from "./book.interface.ts";
import { books } from "./books.ts";

export const getAllBooks = (): Array<BookType> => {
  return books;
}

export const getBookByISBN = (ISBN: Number): BookType | Object => {
  const book = books.find(book => book.isbn == ISBN);
  return book || {};
}