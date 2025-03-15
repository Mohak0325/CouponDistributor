const Coupon = require("../models/Coupon");

const addCoupon = async (req, res) => {
  const { code } = req.body;

  if (!code) {
    return res.status(400).json({ success: false, message: "Coupon code is required!" });
  }

  try {
    const newCoupon = new Coupon({ code });
    await newCoupon.save();

    res.status(201).json({ success: true, message: "Coupon added successfully!", coupon: newCoupon });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error" });
  }
};

module.exports = { addCoupon };