const mongoose = require("mongoose");

const couponSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true , maxLength:12 , lowercase: true},
  claimed: { type: Boolean, default: false },
});

module.exports = mongoose.model("Coupon", couponSchema);
