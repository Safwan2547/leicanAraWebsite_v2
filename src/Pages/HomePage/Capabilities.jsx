import React from "react";
import { animate, inView } from "motion";

function Capabilities() {
  const listClass = "my-4 ml-20 list-item font-Satoshi text-2xl";
  const borderCheck=false;
  const border="border-2 border-black border-solid";
  
  return (
    <div className={`grid  grid-cols-2 gap-4 mt-20  relative ${borderCheck? border: ""} justify-center items-start h-[50vh]`}>
      <div className="col-span-1 flex p-10 items-center ">
        <h1 className="text-5xl font-Lora font-normal">Capabilities</h1>
      </div>
      <div className="col-span-1 flex relative justify-start pt-36 flex-end items-end ">
        <ul className="list-disc flex justify-center  items-start flex-col">
          <li className={`${listClass}`}>Brand Strategy</li>
          <li className={`${listClass}`}>Brand Identity</li>
          <li className={`${listClass}`}>Naming</li>
          <li className={`${listClass}`}>Photography Direction</li>
          <li className={`${listClass}`}>Web Design</li>
        </ul>
      </div>
    </div>
  );
}

export default Capabilities;
