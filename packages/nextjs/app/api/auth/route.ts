import { NextRequest, NextResponse } from "next/server";
import pool from "../../../db.js";

export const POST = async (req: NextRequest) => {
  const { companyName, companyEmail, companyWebsite, cryptoAddress, image } = await req.json();

  try {
    const db = await pool.getConnection({
      connectionAcquisitionTimeout: 10000, // Timeout in milliseconds (10 seconds in this case)
    });

    const [existing] = await db.query("SELECT cryptoAddress FROM auth WHERE cryptoAddress = ?", [cryptoAddress]);

    if (existing.length > 0) {
      db.release();
      return NextResponse.json({ err: "Crypto Address already exists" }, { status: 400 });
    }

    const q =
      "INSERT INTO auth (companyName, companyEmail, companyWebsite, cryptoAddress, image) VALUES (?, ?, ?, ?, ?)";
    const values = [companyName, companyEmail, companyWebsite, cryptoAddress, image];

    const [result] = await db.query(q, values);
    db.release();

    if (!result.affectedRows) {
      return NextResponse.json({ err: "Submission of form failed" }, { status: 400 });
    }

    return NextResponse.json({ msg: "Form successfully submitted" }, { status: 201 });
  } catch (error) {
    console.error("Database Error: ", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
