const express = require("express");
const cors = require("cors");
const postsRouter = require("./routes/posts");
const apiKeyAuth = require("./middleware/auth");

const app = express();
app.use(cors());
app.use(express.json());

//  Apply middleware to all /posts routes
app.use("/posts", apiKeyAuth, postsRouter);

app.get("/", (req, res) => {
  res.json({ message: "SWENG 861 Backend Assignment API is running!" });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("Error:", err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

