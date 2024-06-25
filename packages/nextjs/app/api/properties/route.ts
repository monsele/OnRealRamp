import { NextRequest, NextResponse } from "next/server";
import pool from "../../../db.js";

export const POST = async (req: NextRequest) => {
  const {
    propertyTitle,
    propertyLocation,
    propertyCategory,
    annualYield,
    units,
    price,
    propertyDescription,
    propertyOwner,
    images,
  } = await req.json();

  try {
    const db = await pool.getConnection();

    const q =
      "INSERT INTO property (propertyTitle, propertyLocation, propertyCategory, annualYield, units, price, propertyDescription, propertyOwner, images) VALUES (?,?,?,?,?,?,?,?,?)";

    const value = [
      propertyTitle,
      propertyLocation,
      propertyCategory,
      annualYield,
      units,
      price,
      propertyDescription,
      propertyOwner,
      images,
    ];

    const [result] = await db.query(q, value);
    db.release();

    return NextResponse.json({ result }, { status: 201 });
  } catch (error) {
    console.error("Database Error: ", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
};

export const GET = async (req: NextRequest) => {
  try {
    const db = await pool.getConnection();

    const q = "SELECT * FROM property";
    const [properties] = await db.query(q);

    return NextResponse.json({ properties }, { status: 200 });
  } catch (error) {
    console.error("Database Error: ", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
};
