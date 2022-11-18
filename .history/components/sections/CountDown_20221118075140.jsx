import React, { useState, useEffect, useRef } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

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
    <div>
      {display && (
        <div className="w-full flex  justify-center pt-36 pb-24 md:max-w-[900px] mx-auto  gap-4 px-4">
          {/* <CircularProgressbar
            value={days}
            text={`${days}`}
            styles={buildStyles({
              pathColor: `rgba(62, 152, 199, ${days / 24})`,
              textColor: "#f88",
              trailColor: "gray",
              backgroundColor: "black",
            })}
          />
          
          <CircularProgressbar value={days} text={`${hours}`} />
          <CircularProgressbar value={days} text={`${mins}`} />
          <CircularProgressbar value={days} text={`${secs}`} /> */}

          <TimeDisplay time={days} text="Days" />
          <TimeDisplay time={hours} text="Hours" />
          <TimeDisplay time={mins} text="Minutes" />
          <TimeDisplay time={secs} text="Seconds" />
        </div>
      )}
    </div>
  );
}

export default CountDown;

const TimeDisplay = ({ time, text }) => (
  <div className=" bg-[#e5e5e5] flex items-center justify-center p-8 w-[180px] mr-6 rounded-md  h-[150px] relative shadow-xl">
    {/* <div className="absolute top-[50%] w-full bg-gray-600 h-[2px]"></div> */}
    <div className="bg-white absolute -left-3 w-6  h-6 top-[43%] "></div>
    <div className="bg-white absolute -right-3 w-6  h-6 top-[43%] "></div>
    <h1 className="text-gray-800 text-6xl font-semibold font-montserat block z-50">
      {time}
    </h1>
    <p className="text-center font-sono">{text}</p>
  </div>
);
