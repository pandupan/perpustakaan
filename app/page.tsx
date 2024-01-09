import ECommerce from "@/components/Dashboard/E-commerce";
import HeroHome from "@/components/Home/HeroHome";
import Navbar from "@/components/Layouts/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TailAdmin | Next.js E-commerce Dashboard Template",
  description: "This is Home Blog page for TailAdmin Next.js",
  // other metadata
};

export default function Home() {
  return (
    <>
      <HeroHome/>
    </>
  );
}
