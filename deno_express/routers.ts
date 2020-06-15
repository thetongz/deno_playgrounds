import { Router } from "./dependencies.ts";
import { getAllBooks, getBookByISBN } from "./controllers.ts";

export const bookApiRouter = Router();

bookApiRouter.get("/books", (req, res) => {
  const books = getAllBooks();

  res.setStatus(200).json({
    success: true,
    data: books,
  });
});

bookApiRouter.get("/book/:ISBN", (req, res) => {
  const ISBN: string = req.params.ISBN;
  const ISBNInNumber: Number = Number.parseInt(ISBN);

  const book = getBookByISBN(ISBNInNumber);

  res.setStatus(200).json({
    success: true,
    data: book,
  });
});
