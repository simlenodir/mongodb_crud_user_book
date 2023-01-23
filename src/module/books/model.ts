import { Types, model, Schema } from "mongoose"

const bookSchema = new Schema({
    id: {
        type: Types.ObjectId
    },
    title: {
        type: String,
        required: true,
        minlenght: [3, 'Min leng is 3']
    },
    author: {
        type: String,
        required: true
    }
},
{
    collection: "Books"
})

export default model('Books', bookSchema)