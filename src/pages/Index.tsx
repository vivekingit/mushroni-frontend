import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductDetails } from "@/components/ProductDetails";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingOrderButton } from "@/components/FloatingOrderButton";

const Index = () => {
  const logo = "/lovable-uploads/907b3cdc-0698-4c5d-9d75-fe6dce266707.png";

  return (
    <div className="min-h-screen">
      <Header logo={logo} />
      <Hero />
      <ProductDetails />
      <About />
      <Contact />
      <Footer />
      <FloatingOrderButton />
    </div>
  );
};

export default Index;
