const express = require("express");

const app = express();
const PORT = 3000;

// In-memory store (not suitable for production)
const requestCounts = {};
const WINDOW_SIZE_IN_SECONDS = 60; // 1-minute window
const MAX_REQUESTS = 5; // Maximum allowed requests per window

// Middleware for rate limiting
function rateLimiter(req, res, next) {
  const ip = req.ip;

  if (!requestCounts[ip]) {
    requestCounts[ip] = { count: 1, startTime: Date.now() };
  } else {
    const currentTime = Date.now();
    const elapsedTime = (currentTime - requestCounts[ip].startTime) / 1000;

    if (elapsedTime > WINDOW_SIZE_IN_SECONDS) {
      // Reset count after window time
      requestCounts[ip] = { count: 1, startTime: currentTime };
    } else {
      requestCounts[ip].count += 1;
    }
  }

  if (requestCounts[ip].count > MAX_REQUESTS) {
    return res
      .status(429)
      .json({ message: "Too many requests. Try again later." });
  }

  next();
}

app.use(rateLimiter);

app.get("/", (req, res) => {
  res.send("Welcome! You are within the rate limit.");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
