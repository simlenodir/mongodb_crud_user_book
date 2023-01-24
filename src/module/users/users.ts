import { NextFunction, Request, Response } from "express"
import readersModel from "./model"
import booksModel from "../books/model"

export class Readers {
    static readersModel: any

    constructor(){
        Readers.readersModel = readersModel
    }

    static validate(schema: any): string | boolean  {
        if ( schema.validateSync()?.errors) {
            return  schema.validateSync()?.errors.name.message;
        }else {
            return false
        }
    }

    static async GET_readers(req: Request, res: Response, next: NextFunction): Promise<void> {
        const readers = await readersModel.find().populate('books')

        res.status(200).json(readers)
    }

    static async Post_readers(req: Request, res: Response, next: NextFunction): Promise<void | Response> {
        const { name, email, bookId } = req.body

        const reader = new readersModel({name, email})

        const checkeReader = Readers.validate(reader)
        
        if (checkeReader) {
            return res.status(422).json(checkeReader)
        }
        
        if (bookId == undefined) {
            await reader.save()
            return res.json(reader)
        }
        await reader.save()

        const foundBook = await booksModel.findById({_id: bookId}) as any
        foundBook?.readers.push(reader?._id)
        console.log(foundBook, reader?._id);
        
        await foundBook?.save()
        res.json(reader)
    }
} 