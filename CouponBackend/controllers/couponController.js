const Coupon = require("../models/Coupon");

const claimCoupon = async (req, res) => {
  try {
    const coupon = await Coupon.findOneAndUpdate(
      { claimed: false },
      { claimed: true },
      { new: true }
    );

    if (!coupon) {
      return res.status(400).json({ success: false, message: "No more coupons available!" });
    }

    return res.json({ success: true, coupon: coupon.code, message: "Coupon claimed successfully!" });
  } catch (error) {
    console.error("Claim Coupon Error:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = { claimCoupon };
