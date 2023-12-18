import { User } from "../models/user.model.js";
import { Task } from "../models/task.model.js";
import generateToken from "../utils/generateToken.js";

const registerUser = async (req, res) => {
  try {
    const emailFound = await User.findOne({ email: req.body.email });
    if (emailFound) {
      return res
        .status(409)
        .json({ error: "User Email Already Exists / Registered" });
    }

    const user = new User(req.body);
    const task = new Task();

    user.tasks = task._id;
    task.user = user._id;

    await user.save();
    await task.save();

    res.status(200).json({ success: "User Registered Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

const login = async (req, res) => {
  try {
    const userFound = await User.findOne({ email: req.body.email });
    if (!userFound) {
      return res.status(404).json({ error: "email or passwod is incorrect" });
    }

    const isValid = await bcrypt.compare(req.body.password, userFound.password);

    if (!isValid) {
      return res.status(401).json({ error: "email or passwod is incorrect" });
    }

    let payload = { email: userFound.email, _id: userFound._id };

    let token = generateToken(payload);

    res.status(200).json({ success: "User Login Successfully", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};

const checkToken = (req, res) => {
  try {
    res.status(200).json({ success: "User Verified", payload: req.payload });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};

export { registerUser, login, checkToken };
