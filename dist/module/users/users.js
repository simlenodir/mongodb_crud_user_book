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
exports.Readers = void 0;
const model_1 = __importDefault(require("./model"));
const model_2 = __importDefault(require("../books/model"));
class Readers {
    constructor() {
        Readers.readersModel = model_1.default;
    }
    static validate(schema) {
        var _a, _b;
        if ((_a = schema.validateSync()) === null || _a === void 0 ? void 0 : _a.errors) {
            return (_b = schema.validateSync()) === null || _b === void 0 ? void 0 : _b.errors.name.message;
        }
        else {
            return false;
        }
    }
    static GET_readers(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const readers = yield model_1.default.find().populate('books');
            res.status(200).json(readers);
        });
    }
    static Post_readers(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, bookId } = req.body;
            const reader = new model_1.default({ name, email });
            const checkeReader = Readers.validate(reader);
            if (checkeReader) {
                return res.status(422).json(checkeReader);
            }
            if (bookId == undefined) {
                yield reader.save();
                return res.json(reader);
            }
            yield reader.save();
            const foundBook = yield model_2.default.findById({ _id: bookId });
            foundBook === null || foundBook === void 0 ? void 0 : foundBook.readers.push(reader === null || reader === void 0 ? void 0 : reader._id);
            console.log(foundBook, reader === null || reader === void 0 ? void 0 : reader._id);
            yield (foundBook === null || foundBook === void 0 ? void 0 : foundBook.save());
            res.json(reader);
        });
    }
}
exports.Readers = Readers;
