const express = require("express");
const router = express.Router();
const { claimCoupon } = require("../controllers/couponController");
const { addCoupon } = require("../controllers/addCouponController");
const rateLimiter = require("../middleware/rateLimiter");

// POST /api/claim (Protect with rate limiter)
router.post("/claim",rateLimiter , claimCoupon);

// 🆕 Route to add a new coupon
router.post("/coupons/add", addCoupon);

module.exports = router;
