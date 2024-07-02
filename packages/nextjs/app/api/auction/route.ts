import { NextRequest, NextResponse } from "next/server";
import pool from "../../../db.js";
import { FieldPacket, ResultSetHeader, RowDataPacket } from "mysql2";

export const POST = async (req: NextRequest) => {
  const { nameOfAsset, tokenId, initialBid, owner } = await req.json();
  try {
    const db = await pool.getConnection();
    const q = "INSERT INTO auction (nameOfAsset, tokenId, initialBid,owner) VALUES (?, ?, ?,?)";
    const values = [nameOfAsset, tokenId, initialBid, owner];
    const [result]: [ResultSetHeader, FieldPacket[]] = await db.query(q, values);
    db.release();
    if (result.affectedRows === 0) {
      return NextResponse.json({ err: "Submission of form failed" }, { status: 400 });
    }
    const response = NextResponse.json({ msg: "Form successfully submitted" }, { status: 201 });
    return response;
  } catch (error) {
    console.error("Database Error: ", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  } finally {
  }
};

// export const POST = async (req: NextRequest) => {

// }
