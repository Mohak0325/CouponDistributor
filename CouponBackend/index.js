const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const redisClient = require("./config/redis");
const couponRoutes = require("./routes/claimRoutes");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", couponRoutes);

const PORT = process.env.PORT || 5000;
connectDB().then(() => {
    app.listen(PORT , () => {
        console.log(`Server is running on port ${PORT}`)
    });
}).catch((error) => {
    console.error('Database connection error:', error);
    process.exit(1);
});
