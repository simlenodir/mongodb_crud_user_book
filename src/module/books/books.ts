import { NextFunction, Request, Response } from "express"
import booksModel from "./model"
import usersModel from "../users/model"

export class Books {
    static booksModel: any
    
    constructor(){
        Books.booksModel = booksModel
    }

    static validate(schema: any): string | boolean  {
        if ( schema.validateSync()?.errors) {
            return  schema.validateSync()?.errors.title.message;
        }else {
            return false
        }
    }

    static async GET_books(req: Request, res: Response, next: NextFunction) {
        const books = await booksModel.find().populate('readers')

        res.json(books)
    }

    static async POST_book(req: Request, res: Response, next: NextFunction) {
        const { title, author, readerId } = req.body

        const newReader = new booksModel({
            title,
            author,
            readerId
        })
        const checkedBook =  Books.validate(newReader)
        if (checkedBook) {
            res.status(422).json(checkedBook)
        }
        
        

        if (readerId == undefined) {
            await newReader.save()
            return res.json(newReader)
        }
        
        if (readerId) {
        const foundUser = await usersModel.findById({_id: readerId}) as any
        foundUser?.books.push(newReader?._id)
            console.log(foundUser);
            
        await newReader?.save()
        await foundUser?.save()

        res.json(newReader)
        }
    }
}