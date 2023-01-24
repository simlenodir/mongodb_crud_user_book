import { Types, model, Schema } from "mongoose"

const readerSchema = new Schema({
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
    books: [{type: Types.ObjectId , ref: 'Books'}]
},
{
    collection: "Readers"
})

export default model('Readers', readerSchema)