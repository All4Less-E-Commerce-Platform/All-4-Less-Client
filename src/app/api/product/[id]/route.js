import { NextResponse } from "next/server";

const products = [
  {
    id: 0,
    image: "/products/images.jpeg", // Replace with actual image URL
    title: "SNEAKERS",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    price: 49.99,
    isInWish: false,
    cat: "sneakers",
    sizes: ["S", "M", "L", "XL"],
    featured: true,
  },
  {
    image: "/products/G_G69-2500-2_f78c2621-f99a-4586-8baf-fe5c97a112f9.webp", // Replace with actual image URL
    title: "Stylish Hoodie",
    id: 1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    price: 49.99,
    cat: "hoodies",
    featured: true,
    sizes: ["S", "M", "L"],
    isInWish: false,
  },
  {
    image: "/products/images.jpeg", // Replace with actual image URL
    title: "SNEAKERS",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    price: 49.99,
    id: 2,
    cat: "sneakers",
    sizes: ["S", "M", "L", "XL"],
    featured: true,
    isInWish: false,
  },
  {
    image: "/products/G_G69-2500-2_f78c2621-f99a-4586-8baf-fe5c97a112f9.webp", // Replace with actual image URL
    title: "Stylish Hoodie",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    price: 49.99,
    id: 3,
    sizes: ["M", "L"],
    featured: true,
    cat: "hoodies",
    incomes: true,
    isInWish: false,
  },
  {
    image: "/products/images.jpeg", // Replace with actual image URL
    title: "SNEAKERS",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    price: 49.99,
    featured: true,
    sizes: ["S", "M", "L", "XL"],
    id: 4,
    cat: "sneakers",
    isInWish: false,
  },
  {
    image: "/products/G_G69-2500-2_f78c2621-f99a-4586-8baf-fe5c97a112f9.webp", // Replace with actual image URL
    title: "Stylish Hoodie",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    incomes: true,
    sizes: ["S", "M", "L", "XL"],
    id: 5,
    featured: true,
    price: 49.99,
    cat: "hoodies",
    isInWish: false,
  },
  {
    image: "/products/images.jpeg", // Replace with actual image URL
    title: "SNEAKERS",
    price: 49.99,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    id: 6,
    cat: "sneakers",
    featured: true,
    sizes: ["S", "M", "L", "XL"],
    isInWish: false,
  },
  {
    image: "/products/G_G69-2500-2_f78c2621-f99a-4586-8baf-fe5c97a112f9.webp", // Replace with actual image URL
    title: "Stylish Hoodie",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    sizes: ["S", "M", "L", "XL"],
    price: 49.99,
    id: 8,
    featured: true,
    cat: "hoodies",
    isInWish: false,
  },
  {
    id: 9,
    image: "/products/images.jpeg", // Replace with actual image URL
    featured: true,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    sizes: ["S", "M", "L", "XL"],
    title: "SNEAKERS",
    cat: "sneakers",
    price: 49.99,
    isInWish: false,
  },
  {
    image: "/products/G_G69-2500-2_f78c2621-f99a-4586-8baf-fe5c97a112f9.webp", // Replace with actual image URL
    featured: true,
    title: "Stylish Hoodie",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    sizes: ["S", "M", "L", "XL"],
    id: 10,
    price: 400,
    cat: "hoodies",
    isInWish: false,
  },
  {
    image: "/products/images.jpeg", // Replace with actual image URL
    title: "SNEAKERS",
    price: 400,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    id: 11,
    sizes: ["L", "XL"],
    cat: "sneakers",
    isInWish: false,
    incomes: true,
  },
  {
    image: "/products/download.jpeg", // Replace with actual image URL
    title: "Stylish TShirt",
    price: 400,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    sizes: ["S", "M", "L", "XL"],
    incomes: true,
    cat: "t-shirt",
    id: 18,
    isInWish: false,
  },
  {
    image: "/products/G_G69-2500-2_f78c2621-f99a-4586-8baf-fe5c97a112f9.webp", // Replace with actual image URL
    title: "Stylish Hoodie",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    sizes: ["S", "M", "L", "XL"],
    price: 49.99,
    id: 12,
    incomes: true,
    cat: "hoodies",
    isInWish: false,
  },
  {
    image: "/products/images.jpeg", // Replace with actual image URL
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    sizes: ["S", "M", "L", "XL"],
    title: "SNEAKERS",
    price: 49.99,
    incomes: true,
    id: 13,
    cat: "sneakers",
    isInWish: false,
  },
  {
    image: "/products/G_G69-2500-2_f78c2621-f99a-4586-8baf-fe5c97a112f9.webp", // Replace with actual image URL
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    title: "Stylish Hoodie",
    id: 14,
    price: 49.99,
    sizes: ["S", "M", "L", "XL"],
    incomes: true,
    cat: "hoodies",
    isInWish: false,
  },
  {
    image: "/products/images.jpeg", // Replace with actual image URL
    title: "SNEAKERS",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    price: 49.99,
    incomes: true,
    sizes: ["S", "M", "L", "XL"],
    id: 15,
    cat: "sneakers",
    isInWish: false,
  },
  {
    image: "/products/G_G69-2500-2_f78c2621-f99a-4586-8baf-fe5c97a112f9.webp", // Replace with actual image URL
    title: "Stylish Hoodie",
    price: 49.99,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    incomes: true,
    sizes: ["S", "M", "L", "XL"],
    cat: "hoodies",
    id: 16,
    isInWish: false,
  },
  {
    image: "/products/47071312_99.avif", // Replace with actual image URL
    title: "Stylish TShirt",
    sizes: ["S", "M", "L", "XL"],
    price: 49.99,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    incomes: true,
    cat: "t-shirt",
    id: 17,
    isInWish: false,
  },
  {
    image:
      "/products/smooth-white-cotton-t-shirt-with-beautiful-3d-design-879335.jpg", // Replace with actual image URL
    title: "Stylish TShirt",
    price: 49.99,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    sizes: ["S", "M", "L", "XL"],
    incomes: true,
    cat: "t-shirt",
    id: 19,
    isInWish: false,
  },
  {
    image: "/products/vb200.webp", // Replace with actual image URL
    title: "Stylish TShirt",
    price: 49.99,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    incomes: true,
    cat: "t-shirt",
    sizes: ["S", "M", "L", "XL"],
    id: 20,
    isInWish: false,
  },
  {
    image:
      "/products/Vibrant-Lion-Face-Graphic-Black-T-Shirt-Colorful-Serious-Expression_7463a85b-81a1-472c-ae8e-c0cc040d220e.53759ce21962a98aab6c86da4bb5d537.webp", // Replace with actual image URL
    title: "Stylish TShirt",
    price: 49.99,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    incomes: true,
    cat: "t-shirt",
    id: 21,
    sizes: ["S", "M", "L", "XL"],
    isInWish: false,
  },
];
export async function GET(req, { params }) {
  const { id } = await params;

  const data = products.find((product) => product.id === Number(id));

  if (!data) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
export async function POST() {
  return NextResponse.json(
    { message: "Method Not Allowed" },
    { status: 405, headers: { Allow: "GET" } },
  );
}
