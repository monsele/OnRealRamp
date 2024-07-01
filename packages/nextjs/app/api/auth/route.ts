import { NextRequest, NextResponse } from "next/server";
import pool from "../../../db.js";
import { serialize } from "cookie";
import jwt from "jsonwebtoken";
import { FieldPacket, ResultSetHeader, RowDataPacket } from "mysql2";

export const POST = async (req: NextRequest) => {
  const { companyName, companyEmail, companyWebsite, cryptoAddress, image } = await req.json();

  let db;
  try {
    db = await pool.getConnection();

    const [existing]: [RowDataPacket[], FieldPacket[]] = await db.query(
      "SELECT cryptoAddress FROM auth WHERE cryptoAddress = ?",
      [cryptoAddress],
    );
    if (existing.length > 0) {
      db.release();
      return NextResponse.json({ err: "Crypto Address already exists" }, { status: 400 });
    }
   
    const q =
      "INSERT INTO auth (companyName, companyEmail, companyWebsite, cryptoAddress, image) VALUES (?, ?, ?, ?, ?)";
    const values = [companyName, companyEmail, companyWebsite, cryptoAddress, image];

    const [result]: [ResultSetHeader, FieldPacket[]] = await db.query(q, values);
    db.release();
    if (result.affectedRows === 0) {
      return NextResponse.json({ err: "Submission of form failed" }, { status: 400 });
    }
  //   const token = jwt.sign({ id: result.insertId }, process.env.TOKEN as string, { expiresIn: "30d" });
  // console.log("Here7")
  //   const serializedCookie = serialize("token", token, {
  //     httpOnly: true,
  //     secure: process.env.NODE_ENV === "production",
  //     sameSite: "strict",
  //     maxAge: 30 * 24 * 60 * 60,
  //     path: "/",
  //   });
 console.log("Here8")
    const response = NextResponse.json({ msg: "Form successfully submitted" }, { status: 201 });
   // response.headers.set("Set-Cookie", serializedCookie);

    return response;
  } catch (error) {
    console.error("Database Error: ", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  } finally {
    if (db) db.release();
  }
};
