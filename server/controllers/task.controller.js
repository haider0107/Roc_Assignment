import { Task } from "../models/task.model.js";

const addTask = async (req, res) => {
  try {
    let { _id, email } = req.payload;

    let task = await Task.findOne({ user: _id });

    task.tasks.push(req.body);

    await task.save();

    res.status(200).json({ success: "Data added successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

const editTask = async (req, res) => {
  try {
    let { _id } = req.payload;
    const { task_id } = req.params;
    if (req.body.taskName) {
      let task = await Task.findOneAndUpdate(
        {
          user: _id,
          "tasks._id": task_id,
        },
        {
          $set: {
            "tasks.$.taskName": req.body.taskName, // Use the positional operator ($) to update the name field
          },
        },
        {
          new: true,
        }
      );

      return res.status(200).json({ success: "Data editied successfully" });
    }
    if (req.body.status) {
      let task = await Task.findOneAndUpdate(
        {
          user: _id,
          "tasks._id": task_id,
        },
        {
          $set: {
            "tasks.$.status": req.body.status, // Use the positional operator ($) to update the name field
          },
        },
        {
          new: true,
        }
      );

      return res.status(200).json({ success: "Data editied successfully" });
    }
    if (req.body.isCompleted) {
      let task = await Task.findOneAndUpdate(
        {
          user: _id,
          "tasks._id": task_id,
        },
        {
          $set: {
            "tasks.$.isCompleted": req.body.isCompleted, // Use the positional operator ($) to update the name field
          },
        },
        {
          new: true,
        }
      );

      return res.status(200).json({ success: "Data editied successfully" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

const getTasks = async (req, res) => {
  try {
    const { _id } = req.payload;

    let tasks = await Task.findOne({ user: _id }, "tasks");

    res.status(200).json({ success: "Task Fetched successfully", tasks });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

export { addTask, editTask, getTasks };
