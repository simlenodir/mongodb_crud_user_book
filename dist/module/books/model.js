"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bookSchema = new mongoose_1.Schema({
    id: {
        type: mongoose_1.Types.ObjectId
    },
    title: {
        type: String,
        required: true,
        minlenght: [3, 'Min leng is 3']
    },
    author: {
        type: String,
        required: true
    },
    readers: [{ type: mongoose_1.Types.ObjectId, ref: 'Readers' }]
}, {
    collection: "Books"
});
exports.default = (0, mongoose_1.model)('Books', bookSchema);
