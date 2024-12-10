import Products from '@/models/Products';
import Rank from "@/models/Rank";
import axios from 'axios';
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const ranks = await Rank.findAll({logging: false});

    const newArr = ranks.map((ran) => ran.dataValues)


    const data = await Promise.all(
      newArr.map(async (rank) => {
        const productList = await Products.findAll({
          where: { rankId: String(rank.id) },
          logging: false,
        });        

        let products = productList
        if (productList.length > 30)  {
          products = productList.slice(0, 30)
        }
        
        return {...rank,productList: products };
      })
    );
        
// console.log(data.length, 'length');

    
    // data.forEach(item => {
    //   console.log(item.productList.length);
      
    // })
    
    
    // console.log(data.length);
    
 
    return NextResponse.json(
      { data: data },
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
