const redisClient = require("../config/redis");

const rateLimiter = async (req, res, next) => {
  const ip = req.ip;
  const key = `claim_limit:${ip}`;

  try {
    let attempts = await redisClient.get(key); // Get the current attempt count
    if (!attempts) {
      // First request, set key with expiration of 1 hour
      await redisClient.set(key, 1, { EX: 3600 }); 
      attempts = 1; // Manually set attempts to 1 for next conditions
    } else {
      attempts = parseInt(attempts); // Convert from string to integer

      if (attempts >= 1) { // Limit to 3 requests per 60 seconds
        return res.status(429).json({
          success: false,
          message: "Too many requests. Try again later.",
        });
      }
      await redisClient.incr(key);
      await redisClient.expire(key, 60); 
    }

    next(); // Allow request if under the limit
  } catch (error) {
    console.error("Redis Rate Limiter Error:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = rateLimiter;

// In this snippet, we have created a rateLimiter middleware function that uses Redis to limit the number of requests a user can make in a given time frame. The rate limiter allows a maximum of 1 requests per minute for each IP address. If a user exceeds this limit, a 429 Too Many Requests status code is returned.

