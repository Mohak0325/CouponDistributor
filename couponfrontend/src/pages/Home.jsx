import { useState } from "react";
import CouponClaimButton from "../components/CouponClaimButton";

const Home = () => {
  const [coupon, setCoupon] = useState(null);
  const [message, setMessage] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-full bg-gray-100">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">🎟️ Coupon Distributor</h1>
      <CouponClaimButton setCoupon={setCoupon} setMessage={setMessage} />
      {message && <p className="mt-4 text-lg text-yellow-600">{message}</p>}
      {coupon && <p className="mt-2 text-xl font-bold text-yellow-600">🎉 Your Coupon: {coupon}</p>}
    </div>
  );
};

export default Home;
