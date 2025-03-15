import { useState } from "react";

const AddCouponForm = () => {
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/coupons/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });

      const data = await response.json();
      setMessage(data.message);
      if (data.success) setCode(""); // Reset input field on success
    } catch (error) {
      setMessage("Failed to add coupon");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-full bg-gray-100">
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4 text-blue-600">Add a Coupon</h2>
          {message && <p className="mb-4 text-blue-600">{message}</p>}
          <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Enter coupon code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full p-2 border rounded mb-4 text-red-500 uppercase placeholder-blue-200 placeholder-opacity-25"
            />
            <button className="w-full bg-blue-500 text-white p-2 rounded cursor-pointer">Add Coupon</button>
          </form>
        </div>
    </div>

  );
};

export default AddCouponForm;
