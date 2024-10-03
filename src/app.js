const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "Avinash",
    lastName: "Sharma",
    emailId: "sharmaavi2196@gmail.com",
    password: "Avinash@123",
    age: 58,
    gender: "male",
  });
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
