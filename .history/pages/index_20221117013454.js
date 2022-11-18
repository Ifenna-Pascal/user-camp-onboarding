import Head from "next/head";
import Image from "next/image";
import Nav from "../components/layout/Nav";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="max-w-[1400px] mx-auto">
      <Nav />
    </div>
  );
}
