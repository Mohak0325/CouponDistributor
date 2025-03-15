# Coupon Distribution System
📌 Project Overview

This is a live coupon distribution web application that:
✅ Distributes coupons to guest users in a round-robin manner 🎟️
✅ Prevents multiple claims via page refresh ⛔
✅ Implements rate limiting to stop abuse 🚫

🚀 Tech Stack
Frontend: React, TailwindCSS
Backend: Node.js, Express.js, MongoDB, Redis
Database: MongoDB
Caching & Rate Limiting: Redis

🎯 Features
🔹 Round-robin coupon distribution – ensures fairness
🔹 Rate limiting (Redis) – prevents abuse
🔹 Guest protection – users can’t claim multiple coupons by refreshing
🔹 Admin panel (optional) – allows adding new coupons

🛠️ Installation & Setup
1️⃣ Clone the Repository
git clone
cd coupon-app

2️⃣ Backend Setup
cd backend
npm install
cp .env.example .env  # Configure MongoDB & Redis
npm run dev  # Start backend

3️⃣ Frontend Setup
cd frontend
npm install
npm start  # Start React app