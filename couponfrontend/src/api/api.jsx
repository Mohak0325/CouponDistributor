export const claimCoupon = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/claim", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
  
      return await response.json();
    } catch (error) {
      return { success: false, message: "Server error" };
    }
  };
  