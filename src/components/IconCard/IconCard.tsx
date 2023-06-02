import AirdropIcon from "@/Logo and Icons/AirdropIcon";
import AnalyticsIcon from "@/Logo and Icons/AnalyticsIcon";
import FindHoldersIcon from "@/Logo and Icons/FindHoldersIcon";
import NFTIcon from "@/Logo and Icons/NFTIcon";
import TradeinIcon from "@/Logo and Icons/TradeinIcon";

import React from "react";

interface Props {
  name: any;
  bgColor: any;
  svgIcon: React.ReactNode;
}

const IconCard: React.FC<Props> = ({ name, bgColor, svgIcon }) => {
  return (
    <div className="w-[19.07%] items-center flex flex-col">
      <div
        className={`w-full flex justify-center items-center rounded-lg h-[151px]`}
        style={{ backgroundColor: bgColor }}
      >
        {svgIcon}
      </div>
      <div className="mt-2">
        <p className="font-satoshi font-bold text-base text-center leading-6 text-[#FFFFFF]">
          {name}
        </p>
      </div>
    </div>
  );
};

export default IconCard;
