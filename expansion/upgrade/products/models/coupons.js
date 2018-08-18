const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CouponSchema = new Schema({
  name: String,
  discount: Number,
  categories: {
    type: Schema.Types.ObjectId,
    ref: "ProductCategory"
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  start:{
    type: String,
    default: moment().format("dddd, MMM Do YYYY")
  },
  end:{
    type: String
  }
});

module.exports = mongoose.model("Coupon", CouponSchema);
