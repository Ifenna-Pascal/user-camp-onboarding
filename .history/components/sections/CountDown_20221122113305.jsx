/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useRef } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CountUp from "react-countup";

function CountDown() {
  // timer counter state
  let [days, setDays] = useState("00");
  let [hours, setHours] = useState("00");
  let [mins, setMins] = useState("00");
  let [secs, setSecs] = useState("00");
  const [display, setDisplay] = useState(false);
  let interval = useRef();

  // time counter function
  let startTimer = () => {
    let countdownDate = new Date("Dec 12, 2022 12:00:00").getTime();
    interval = setInterval(() => {
      let now = new Date().getTime();
      let distance = countdownDate - now;
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let secs = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        setDisplay(false);
      } else {
        setDisplay(true);
        setDays(days);
        setHours(hours);
        setMins(mins);
        setSecs(secs);
      }
    }, 1000);
  };

  // countdown functionality on load
  useEffect(() => {
    startTimer();
    const currentValue = interval.current;
    return () => {
      clearInterval(currentValue);
    };
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center ">
      <div className="w-full -mt-8  h-[500px]">
        <img
          src="/assets/flyer.jpg"
          alt="campFlyer"
          className="w-full h-full object-center object-cover"
        />
      </div>
      {display && (
        <div className="w-full flex  justify-center  pt-6 pb-12 lg:pb-24 md:max-w-[900px] lg:mx-auto  lg:gap-4 px-8">
          <TimeDisplay time={days} text="Days" />
          <TimeDisplay time={hours} text="Hours" />
          <TimeDisplay time={mins} text="Minutes" />
          <TimeDisplay time={secs} text="Seconds" sec />
        </div>
      )}
    </div>
  );
}

export default CountDown;

const TimeDisplay = ({ time, text, sec }) => (
  <div className=" bg-[#e5e5e5] flex items-center  justify-center p-8 w-[75px] lg:w-[180px] mr-4 lg:mr-6 rounded-md h-[80px] lg:h-[150px] relative shadow-lg">
    {/* <div className="absolute top-[50%] w-full bg-gray-600 h-[2px]"></div> */}
    <div className="bg-white absolute -left-3 w-4 lg:w-6  h-4 lg:h-6 top-[43%] "></div>
    <div className="bg-white absolute -right-3 w-4 lg:w-6  h-4 lg:h-6 top-[43%] "></div>
    <div className="flex flex-col items-center">
      <h1 className="text-gray-800 text-2xl lg:text-6xl mb-2 font-semibold font-montserat block">
        {sec ? (
          time
        ) : (
          <CountUp
            end={time}
            duration={2.75}
            useEasing
            enableScrollSpy
            scrollSpyDelay={1}
          />
        )}
      </h1>
      <p className="text-center block text-sm lg:text-base font-sono">{text}</p>
    </div>
  </div>
);
