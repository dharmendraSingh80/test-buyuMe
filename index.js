const express = require("express");
const app = express();
require("./confiig.js");
const Product = require("./model/Product");

app.use(express.json());
app.post("/create", async (req, res) => {
  let result = await Product.create(req.body);
  console.log(result);
  res.send(result);
});

app.listen(8000, () => {
  console.log("server is running on Port 8000");
});
