// /app/[id]/page.js

"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import ProductCard from "@/app/components/home/ProductCard";
import { LoadingPage } from "@/app/components/Loading/LoadingPage";

export default function DynamicPage() {
  const router = useRouter();
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    // Example: Fetch data from an API
    const fetchData = async () => {
      const response = await fetch(`/api/product/${id}`);
      const result = await response.json();
      if (result.message === "Product not found") {
        router.push("/404");
      } else {
        setData(result);
      }
    };

    fetchData();
  }, [id]);

  if (!data) {
    return <LoadingPage />;
  }

  return (
    <div>
      <ProductCard product={data} />
    </div>
  );
}
