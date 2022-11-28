import CountDown from "../components/sections/CountDown";
import Hero from "../components/sections/Hero";
import HowItWorks from "../components/sections/HowItWorks";
import Numerics from "../components/sections/Numerics";
import Reviews from "../components/sections/Reviews";
import Speech from "../components/sections/Speech";
import Steps from "../components/sections/Steps";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="max-w-[1450px] mx-auto">
        <Hero />
        <CountDown />
        <HowItWorks />
        <Speech />
        <Numerics />
        <Steps />
        <Reviews />
      </div>
    </>
  );
}
