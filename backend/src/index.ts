import express = require("express");
import cors = require("cors");
import * as path from "path";
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Serve frontend assets
app.use(express.static(path.join(__dirname, "../frontend/dist")));

// Example API endpoint
app.get("/api/status", (req, res) => {
  res.json({ message: "Backend is running" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
