import React from "react";

const FlexAndResponsive = () => {
    
  return (
    <div>
      <div className="flex flex-row flex flex-wrap">
        <div className="basis-1/4 bg-blue-300">01</div>
        <div className="basis-1/4 bg-blue-400">02</div>
        <div className="basis-1/4 bg-blue-500">03</div>
        <div className="basis-1/4 bg-blue-600">04</div>
        <div className="basis-2/4 bg-blue-700">05</div>
        <div className="basis-2/4 bg-blue-700">06</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-2">
        {Array.from({ length: 8 }, (_,item) => (
            <div className="bg-emerald-500" >{item}</div>
        ))}
      </div>
    </div>
  );
};

export default FlexAndResponsive;
