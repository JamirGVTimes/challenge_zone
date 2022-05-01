import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    todoTitle: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true
    }
},
    {
    timestamps: true
    }
)
const Todo = mongoose.model("Todo", todoSchema);

export default Todo;