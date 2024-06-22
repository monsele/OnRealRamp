import pool from "../../../db.js";


export default async function handler(req, res) {
   if (req.method === 'POST') {
    try {
    const connection = await pool.getConnection({
      connectionAcquisitionTimeout: 10000, // Timeout in milliseconds (10 seconds in this case)
    });
    const { name, address, description, totalPlots, amountToSell, estateType } = req.body;

    const query = `
        INSERT INTO Listings (Name, Address, Description, TotalPlots, AmountToSell, EstateType)
        VALUES (?, ?, ?, ?, ?, ?)
      `;
    const values = [name, description, address, totalPlots, amountToSell, estateType];
    const [result] = await connection.query(query, values);
    res.status(200).json({
      success: true,
      data: result.insertId,
      message: `${name} been created with ${totalPlots} but ${amountToSell} availiable for purchase`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error inserting listing", data: 0 });
  }
   }
   else{
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
   }
  
}