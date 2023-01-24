import { Router } from "express";
import { Readers } from "./users";

const userRoutes = Router()

export default userRoutes 
    .get('/readers', Readers.GET_readers)
    .post('/createReader', Readers.Post_readers)