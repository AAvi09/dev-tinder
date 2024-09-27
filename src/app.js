const express = require("express");

const app = express();
let users = [{ id: 1, name: "Rahul", email: "rahul@example.com", age: 25 }];

app.get("/user", (req, res) => {
  res.send({ firstName: "Avinash", lastName: "Sharma" });
});

app.post("/user", (req, res) => {
  res.send("data successfully saved to database");
});

app.delete("/user", (req, res) => {
  res.send("deleted user ......confirmed!!!!");
});

app.use("/test", (req, res) => {
  res.send("ye ek test flight he");
});

app.listen(3000, () => {
  console.log("server is successfully listening at port 3000 .....");
});
