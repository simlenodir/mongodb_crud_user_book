"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Books = void 0;
const model_1 = __importDefault(require("./model"));
const model_2 = __importDefault(require("../users/model"));
class Books {
    constructor() {
        Books.booksModel = model_1.default;
    }
    static validate(schema) {
        var _a, _b;
        if ((_a = schema.validateSync()) === null || _a === void 0 ? void 0 : _a.errors) {
            return (_b = schema.validateSync()) === null || _b === void 0 ? void 0 : _b.errors.title.message;
        }
        else {
            return false;
        }
    }
    static GET_books(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const books = yield model_1.default.find().populate('readers');
            res.json(books);
        });
    }
    static POST_book(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, author, readerId } = req.body;
            const newReader = new model_1.default({
                title,
                author,
                readerId
            });
            const checkedBook = Books.validate(newReader);
            if (checkedBook) {
                res.status(422).json(checkedBook);
            }
            if (readerId == undefined) {
                yield newReader.save();
                return res.json(newReader);
            }
            if (readerId) {
                const foundUser = yield model_2.default.findById({ _id: readerId });
                foundUser === null || foundUser === void 0 ? void 0 : foundUser.books.push(newReader === null || newReader === void 0 ? void 0 : newReader._id);
                console.log(foundUser);
                yield (newReader === null || newReader === void 0 ? void 0 : newReader.save());
                yield (foundUser === null || foundUser === void 0 ? void 0 : foundUser.save());
                res.json(newReader);
            }
        });
    }
}
exports.Books = Books;
