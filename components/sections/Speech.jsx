/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

function Speech() {
  const [show, setShow] = useState(false);
  let p = `  I welcome all to Young People Love Jesus camp meeting 2022. It's
    beautiful and exciting to know that we have people in the room whom
    it's their first time of being here. If you're new today, we want to
    extend to you a special welcome. Young people Love Jesus camp meeting
    is an annual programme geared towards bringing young people all over
    the world together, leading them through the process of salvation by
    the help of the Holy Spirit (for those who haven't experienced this),
    passing them through teachings and training made to equip them for the
    days ahead, and helping them through Christ fulfill their purposes.
    The theme for this year - Agents of Transformation - has kept me
    bubbling with excitement and earnest expectation as to what this
    year's camp meeting holds for us and I can't wait to take hold of the
    prophesies and words from God for me and I hope it's same with you?
    The Lord is about to take us to a new level, are you ready for it?
    Like our Daddy, Apostle Uche S. Nick would say, With Jesus joy in my
    heart,I say once again, you're welcome!`;
  let distance = show ? p.length - 1 : 302;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 pt-12 items-center justify-center ">
      <div className="w-full -mt-8  h-[500px]">
        <img
          src="/assets/miss.jpg"
          alt="campFlyer"
          className="w-full h-full lg:rounded-lg object-center object-cover"
        />
      </div>
      <div className="lg:p-6">
        <h1 className="p-2 text-lg font-sono font-semibolds">
          {" "}
          Queen Anyaogu Chidera Ruth. <br />
          Miss YEMS 2022/2023,
        </h1>
        <p className="text-left block text-lg  font-poppins  leading-[32px] text-gray-500  px-2">
          {p.substring(0, distance)}
          <span
            className="font-semibold italic duration-300 px-2 cursor-pointer font-sono text-gray-600"
            onClick={() => setShow(!show)}
          >
            {show ? "show less" : "show more"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Speech;
