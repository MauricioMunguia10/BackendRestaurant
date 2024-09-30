import { createClient } from "@libsql/client";
import dotenv from "dotenv";

dotenv.config();

const db = createClient({
  url: process.env.TURSO_URL,
  authToken: process.env.TURSO_TOKEN,
});

export const connectDB = () => {
  try {
    db.execute("SELECT 1");
    console.log("Connected to Turso database successfully");
  } catch (error) {
    console.error("Error connecting to Turso database:", error.message);
    process.exit(1);
  }
};

export default db;
