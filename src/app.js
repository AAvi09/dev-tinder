const express = require("express");
const app = express();

app.get("/getUserData", (req, res) => {
  throw new Error("naya error he");
  res.send("user data send");
});

app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("kuch toh gadbad he daya");
  }
});
app.listen(3000, () => {
  console.log("server is successfully listening at port 3000 .....");
});
