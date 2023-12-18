import mongoose from "mongoose";

let taskSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  tasks: [
    {
      taskName: {
        type: String,
        required: true,
      },
      status: {
        type: String,
        required: true,
      },
      isCompleted: {
        type: Boolean,
        default: false,
      },
      deadline: {
        type: Date,
        required: true,
      },
    },
  ],
});

export const Task = mongoose.model("Task", taskSchema);
