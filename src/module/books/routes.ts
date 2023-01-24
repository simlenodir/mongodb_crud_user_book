import { Router } from "express";
import { Books } from "./books";

const booksRoutes = Router()

export default booksRoutes
    .get('/books', Books.GET_books)
    .post('/createBook', Books.POST_book)