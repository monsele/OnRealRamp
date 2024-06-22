//import pool from "../../db";
import pool from '../../../db.js';

// Assuming db.js is in a sibling directory
export default async function handler(req, res) {
  try {
    const connection = await pool.getConnection({
      connectionAcquisitionTimeout: 10000, // Timeout in milliseconds (10 seconds in this case)
    });
    const [results] = await connection.query("SELECT * FROM defaultdb.EMPLOYEE"); // Modify query as needed
    connection.release();
    res.status(200).json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
}