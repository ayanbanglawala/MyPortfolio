import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const PORT = 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Enable CORS
app.use(cors({
  origin: 'http://localhost:5173',  // Allow only your frontend
}));

// Serve static files from the "dist" folder
app.use(express.static(path.join(__dirname, "..", "Frontend", "dist")));

// Fallback for any other route to serve index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "Frontend", "dist", "index.html"));
});

// Handle 404s before the fallback
app.use((req, res, next) => {
  res.status(404).json({ message: "Page not found" });
  next();
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
