import express from "express";
import connectDB from "./config/db.js"; // Note the '.js' extension
import dotenv from "dotenv";

import itemRoutes from "./routes/itemRoutes.js";

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

app.use(express.json());
app.use("/api/items", itemRoutes);

const PORT = process.env.PORT || 1000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

