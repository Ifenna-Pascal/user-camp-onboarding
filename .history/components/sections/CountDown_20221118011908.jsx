import React, { useState, useEffect, useRef } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
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
    let countdownDate = new Date("Decf 1, 2022 12:00:00").getTime();
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
        <div className="w-full flex  justify-center pt- md:w-[500px] mx-auto  gap-4 px-4">
          <CircularProgressbar value={days} text={`${days}`} />;
          <CircularProgressbar value={days} text={`${hours}`} styles={buildStyles({
    // Rotation of path and trail, in number of turns (0-1)
    rotation: 0.25,

    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    strokeLinecap: 'butt',

    // Text size
    textSize: '16px',

    // How long animation takes to go from one percentage to another, in seconds
    pathTransitionDuration: 0.5,

    // Can specify path transition in more detail, or remove it entirely
    // pathTransition: 'none',

    // Colors
    pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
    textColor: '#f88',
    trailColor: '#d6d6d6',
    backgroundColor: '#3e98c7' />;
    
          <CircularProgressbar value={days} text={`${mins}`} />;
          <CircularProgressbar value={days} text={`${secs}`} />;
        </div>
      )}
    </div>
  );
}

export default CountDown;
