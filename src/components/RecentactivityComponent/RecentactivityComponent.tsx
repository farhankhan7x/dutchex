import React from "react";
import Dot from "../Dot/Dot";

const RecentactivityComponent = () => {
  let datas = [
    {
      dotColor: "#70BC63",
      name: "Running",
    },
    {
      dotColor: "#DF4141",
      name: "Interrupted",
    },
    {
      dotColor: "#4798E3",
      name: "Completed",
    },
  ];
  return (
    <div className="flex pl-3">
      {datas.map((data, index) => (
        <div key={index} className="flex pl-2  items-center">
          <Dot className={"w-[12px] h-[12px] "} bgColor={data.dotColor} />
          <span className="pl-2 font-bold text-sm leading-[21px] text-[#FFFFFF]">
            {data.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default RecentactivityComponent;
