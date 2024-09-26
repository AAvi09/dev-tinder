const express = require("express");

const app = express();

app.use("/test", (req, res) => {
  res.send("ye ek test flight he");
});

app.use("/hello", (req, res) => {
  res.send("hello from the server");
});

app.listen(3000, () => {
  console.log("server is successfully listening at port 3000 .....");
});
