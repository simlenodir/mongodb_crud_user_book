import { Router } from "express";
import userRoutes from "./users/routes"
import booksRoutes from "./books/routes"

const routes = Router()

export default routes
    .use(userRoutes)
    .use(booksRoutes)