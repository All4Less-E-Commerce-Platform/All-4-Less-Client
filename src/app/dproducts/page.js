"use client";

import { useEffect } from "react";

function Shop() {
  useEffect(() => {
    // Dynamically load the Ecwid script
    const script = document.createElement("script");
    script.src =
      "https://app.ecwid.com/script.js?110660768&data_platform=code&data_date=2024-12-03";
    script.type = "text/javascript";
    script.async = true;
    script.charset = "utf-8";
    script.setAttribute("data-cfasync", "false");
    document.body.appendChild(script);

    // Initialize the Ecwid product browser after script is loaded
    script.onload = () => {
      window.xProductBrowser(
        "categoriesPerRow=3",
        "views=grid(20,3) list(60) table(60)",
        "categoryView=grid",
        "searchView=list",
        "id=my-store-110660768",
      );
    };

    // Cleanup the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <h1>Our Shop</h1>
      <div id="my-store-110660768" />
    </div>
  );
}

export default Shop;
