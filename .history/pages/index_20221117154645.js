import Head from "next/head";
import Image from "next/image";
import Nav from "../components/layout/Nav";
import Hero from "../components/sections/Hero";
import HowItWorks from "../components/sections/HowItWorks";
import Numerics from "../components/sections/Numerics";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="max-w-[1450px] mx-auto">
      <Nav />
      <Hero />
      <HowItWorks />
      <Numerics />
    </div>
  );
}
