const redis = require("redis");

// Create a Redis client
const redisClient = redis.createClient({
  socket: {
    host: process.env.REDIS_HOST || "127.0.0.1",
    port: process.env.REDIS_PORT || 6379,
  },
});

// Log Redis connection status
redisClient.on("connect", () => console.log("✅ Redis Connected Successfully!"));
redisClient.on("ready", () => console.log("✅ Redis Ready!"));
redisClient.on("error", (err) => console.error("❌ Redis Error:", err));
redisClient.on("end", () => console.log("🔴 Redis Disconnected"));

redisClient.connect(); // Explicitly connect Redis in the latest versions

module.exports = redisClient;

