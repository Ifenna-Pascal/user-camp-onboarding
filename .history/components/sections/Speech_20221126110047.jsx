import React from "react";

function Speech() {
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
        <div className="w-full flex  justify-center  pt-10 pb-12 lg:pb-24 md:max-w-[900px] lg:mx-auto  lg:gap-4 px-8">
          <TimeDisplay time={days} text="Days" />
          <TimeDisplay time={hours} text="Hours" />
          <TimeDisplay time={mins} text="Minutes" />
          <TimeDisplay time={secs} text="Seconds" sec />
        </div>
      )}
    </div>
  );
}

export default Speech;
