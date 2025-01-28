import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("dist"));

const PORT = process.env.PORT || 5800;

// Simple GET API endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Checkatrade!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});