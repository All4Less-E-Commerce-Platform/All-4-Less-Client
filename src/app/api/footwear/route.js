import Products from '@/models/Products';
import Rank from "@/models/Rank";
import axios from 'axios';
import { NextResponse } from "next/server";
import { Op } from 'sequelize';

export async function GET() {
  try {
    const products = await Products.findAll({where:  { category: "Shoes" }, logging: false});

 
    return NextResponse.json(
      { data: products },
      {
        headers: {
          "Cache-Control": "no-store",
        },
      },
    );
  } catch (error) {
    console.log(error);
    
    console.error("API Error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}

export async function POST() {
  return NextResponse.json(
    { message: "Method Not Allowed" },
    { status: 405, headers: { Allow: "GET" } },
  );
}
