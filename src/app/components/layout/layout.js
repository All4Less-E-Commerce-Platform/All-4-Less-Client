import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { HeadLine } from "./HeadLine";
import { Header } from "./Header";
import { SecHeader } from "./SecHeader";
import { Footer } from "./Footer";
import { LoadingPage } from "../Loading/LoadingPage";

export function RootLayouts({ children }) {
  const [showScrolledNavbar, setShowScrolledNavbar] = useState(false);
  const { status } = useSession();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrolledNavbar(window.scrollY > 200); // Adjust the scroll value as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  if (status === "loading") {
    return <LoadingPage />;
  }
  return (
    <>
      <HeadLine />
      <Header />
      <SecHeader displayed={showScrolledNavbar} />
      {children}
      <Footer />
    </>
  );
}
