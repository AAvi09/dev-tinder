const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");
app.use(express.json());
app.post("/signup", async (req, res) => {
  //   console.log(req.body);
  const user = new User(req.body);
  try {
    await user.save();
    res.send("user has been added successfully");
  } catch (err) {
    res.status(400).send("error saving the user : " + err.message);
  }
});
connectDB()
  .then(() => {
    console.log("database connection established");
    app.listen(3000, () => {
      console.log("server is successfully listening at port 3000 .....");
    });
  })
  .catch((err) => {
    console.log("database cannot be connected");
  });
