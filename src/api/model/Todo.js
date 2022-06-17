import mongoose from "mongoose"

const {Schema, model} = mongoose

const todoSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        required: true
    }
},{
    timestamps: true,
    versionKey: false
})

export default model("Todo", todoSchema)