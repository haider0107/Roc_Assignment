import "dotenv/config";
import connectDB from "./db/index.js";

import { app } from "./app.js";

// connectDB is async method which always returns a promise that's why we can perform promise operation
connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("ERR: ", error);
      throw error;
    });

    app.listen(process.env.PORT || 5000, () => {
      console.log(`⚙️  Port is running on ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGODB connection failed !!! ", err);
  });
