"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const readerSchema = new mongoose_1.Schema({
    // id: {
    //     type: Types.ObjectId
    // },
    name: {
        type: String,
        required: true,
        minLength: [3, 'Min length is 3'],
    },
    email: {
        type: String,
        required: true
    },
    books: [{ type: mongoose_1.Types.ObjectId, ref: 'Books' }]
}, {
    collection: "Readers"
});
exports.default = (0, mongoose_1.model)('Readers', readerSchema);
