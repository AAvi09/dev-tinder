const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");
app.use(express.json());

//get user by email
app.get("/user", async (req, res) => {
  const userEmailId = req.body.emailId;
  try {
    const user = await User.findOne({ emailId: userEmailId });
    if (!user) {
      res.status(404).send("user not found");
    } else {
      res.send(user);
    }
  } catch (err) {
    res.status(400).send("something went wrong");
  }
});

//feed API
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    res.status(400).send("something went wrong");
  }
});

app.delete("/user", async (req, res) => {
  const userId = req.body.userId;
  try {
    const user = await User.findByIdAndDelete(userId);
    res.send("user deleted successfully");
  } catch (err) {
    res.status(400).send("something went wrong");
  }
});

app.patch("/user", async (req, res) => {
  const userId = req.body.userId;
  const data = req.body;
  try {
    await User.findByIdAndUpdate(userId, data);
    res.send("user updated successfully");
  } catch (err) {
    res.status(400).send("something went wrong");
  }
});

app.patch("/user", async (req, res) => {
  const emailId = req.body.emailId;
  const data = req.body;
  //   console.log(emailId);
  try {
    await User.findOneAndUpdate({ email: emailId }, data);
    res.send("user updated successfully");
  } catch (err) {
    res.status(400).send("something went wrong");
  }
});

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
