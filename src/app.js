const express = require("express");

const app = express();
let users = [{ id: 1, name: "Rahul", email: "rahul@example.com", age: 25 }];

const { adminAuth } = require("./middlewares/auth.js");

app.use("/admin", adminAuth);

app.get("/admin/getAllData", (req, res) => {
  res.send("all data sent");
});

app.get("/admin/deleteUser", (req, res) => {
  res.send("deleted a user");
});

app.listen(3000, () => {
  console.log("server is successfully listening at port 3000 .....");
});
