import { Types, model, Schema } from "mongoose"

const readerSchema = new Schema({
    id: {
        type: Types.ObjectId
    },
    name: {
        type: String,
        required: true,
        minlenght: [3, 'Min leng is 3']
    },
    email: {
        type: String,
        required: true
    }
},
{
    collection: "Readers"
})

export default model('Readers', readerSchema)