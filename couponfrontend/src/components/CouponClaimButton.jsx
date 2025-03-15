import { useState, useEffect } from "react";
import { claimCoupon } from "../api/api";


const CouponClaimButton = ({ setCoupon, setMessage }) => {
  const [isClaimed, setIsClaimed] = useState(false);

  useEffect(() => {
    const storedCoupon = localStorage.getItem("userCoupon");
    if (storedCoupon) {
      setIsClaimed(true);
      setCoupon(storedCoupon);
      setMessage("✅ Coupon already claimed!");
    }
  }, [setCoupon]);

  const handleClaim = async () => {
    if (isClaimed) return;

    const response = await claimCoupon();
    setMessage(response.message);
    if (response.success) {
      localStorage.setItem("userCoupon", response.coupon);
      setCoupon(response.coupon);
      setIsClaimed(true);
    }
  };

  return (
    <button
      onClick={handleClaim}
      className={`mt-4 px-6 py-2 rounded text-white cursor-pointer ${
        isClaimed ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-700"
      }`}
      disabled={isClaimed}
    >
      {isClaimed ? "Coupon Claimed" : "Claim Coupon"}
    </button>
  );
};

export default CouponClaimButton;
