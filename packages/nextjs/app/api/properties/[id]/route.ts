import { NextRequest, NextResponse } from "next/server";
import pool from "../../../../db";
import { OkPacketParams, RowDataPacket } from "mysql2/promise";


export const GET = async (req: NextRequest, { params }: string | any) => {
  const { id } = params;

  console.log(id);

  try {
    const db = await pool.getConnection();
    const q = "SELECT * FROM property WHERE id=?";
    const [row] = await db.query<RowDataPacket[]>(q, [id]);

    const singleProperty = row[0];

    return NextResponse.json({ singleProperty }, { status: 200 });
  } catch (error) {
    console.error("Database Error: ", error); 
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
};

export const PATCH = async (req: NextRequest, { params }: { params: { id: string } }) => {
  const { id } = params;
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

    const q = `
      UPDATE property 
      SET 
        propertyTitle = ?, 
        propertyLocation = ?, 
        propertyCategory = ?, 
        annualYield = ?, 
        units = ?, 
        price = ?, 
        propertyDescription = ?, 
        propertyOwner = ?, 
        images = ? 
      WHERE id = ?
    `;

    const values = [
      propertyTitle,
      propertyLocation,
      propertyCategory,
      annualYield,
      units,
      price,
      propertyDescription,
      propertyOwner,
      images,
      id,
    ];

    const [result]: [OkPacketParams] = await db.query(q, values);

    db.release();

    if (result.affectedRows > 0) {
      return NextResponse.json({ message: "property updated" }, { status: 200 });
    } else {
      return NextResponse.json({ err: "property not found" }, { status: 404 });
    }
  } catch (error) {
    console.error("Database Error: ", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
};