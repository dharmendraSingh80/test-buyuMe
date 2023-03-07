const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.ObjectId;
const productSchema = new mongoose.Schema({
  productId: ObjectId,
  quantity: Number,
  operation: String,
});

module.exports = mongoose.model("Product", productSchema);
