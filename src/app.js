const express = require("express");

const app = express();
let users = [{ id: 1, name: "Rahul", email: "rahul@example.com", age: 25 }];

app.use(
  "/router",
  [
    (req, res, next) => {
      console.log("first request handled");
      next();
      res.send("handle 1");
    },

    (req, res, next) => {
      console.log("2nd request handled");
      next();
      res.send("handle 2");
    },
  ],
  (req, res) => {
    console.log("last request handler");
    res.send("handle 3");
  }
);

app.get("/user/:userId/:name/:tag", (req, res) => {
  console.log(req.params);
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
