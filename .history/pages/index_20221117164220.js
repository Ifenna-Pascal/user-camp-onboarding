import Head from "next/head";
import Image from "next/image";
import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";
import Hero from "../components/sections/Hero";
import HowItWorks from "../components/sections/HowItWorks";
import Numerics from "../components/sections/Numerics";
import Reviews from "../components/sections/Reviews";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="max-w-[1450px] mx-auto">
      <Nav />
      <Hero />
      <HowItWorks />
      <Numerics />
      <Reviews />
      <Footer />
    </div>
  );
}
