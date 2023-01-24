"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const books_1 = require("./books");
const booksRoutes = (0, express_1.Router)();
exports.default = booksRoutes
    .get('/books', books_1.Books.GET_books)
    .post('/createBook', books_1.Books.POST_book);
