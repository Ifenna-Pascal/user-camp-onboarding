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
        <div className="w-full flex  justify-center pt-24 pb-12 md:max-w-[1000px] mx-auto  gap-4 px-4">
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

          <TimeDisplay time={days} />
          <TimeDisplay time={hours} />
          <TimeDisplay time={mins} />
          <TimeDisplay time={secs} />
        </div>
      )}
    </div>
  );
}

export default CountDown;

const TimeDisplay = ({ time, text }) => (
  <div className=" bg-[#e5e5e5] flex items-center justify-center p-8 w-[220px] rounded-md  h-[150px] shadow-inner">
    {/* <h1 className="text-gray-800 text-4xl font-montserat">{time}</h1> */}
  </div>
);
