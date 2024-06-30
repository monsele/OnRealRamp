import { NextRequest, NextResponse } from "next/server";
//import pool from "../db../../../../db";
import pool from '../../../../../db'
import { OkPacketParams, RowDataPacket } from "mysql2/promise";

export const GET = async (req: NextRequest, { params }: number | any) =>{
  const { tid } = params;

  console.log(tid);
  try {
     const db = await pool.getConnection();
    const q = "select propertyTitle,propertyDescription from property where smartContractId=?";
    const [row] = await db.query<RowDataPacket[]>(q, [tid]);
   const result = {
    name:row[0].propertyTitle,
    description : row[0].propertyDescription,
    image:"https://currencymart.net/images/toronto/how-big-is-drakes-house-in-toronto/img-Gk3hAN1R9kVoIm5UKZpU56E3.webp"
   }
    const singleProperty = row[0];
     return NextResponse.json( result , { status: 200 });
  } catch (error) {
    console.error("Database Error: ", error); 
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}