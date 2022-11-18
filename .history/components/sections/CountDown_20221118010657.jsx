import React from "react";

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
}

export default CountDown;
