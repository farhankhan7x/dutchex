import IconCard from "@/components/IconCard/IconCard";
import AirdropIcon from "@/Assets/AirdropIcon";
import AnalyticsIcon from "@/Assets/AnalyticsIcon";
import FindHoldersIcon from "@/Assets/FindHoldersIcon";
import NFTIcon from "@/Assets/NFTIcon";
import TradeinIcon from "@/Assets/TradeinIcon";

import React from "react";

let lists = [
  {
    name: "NFT Management",
    bgColor: "rgba(46, 198, 46, 0.2)",
    svgIcon: <NFTIcon />,
  },
  {
    name: "Find Holders",
    bgColor: "rgba(245, 215, 46, 0.2)",
    svgIcon: <FindHoldersIcon />,
  },
  {
    name: "Airdrop",
    bgColor: "rgba(46, 196, 218, 0.2)",
    svgIcon: <AirdropIcon />,
  },
  {
    name: "Trade-In",
    bgColor: "rgba(167, 76, 201, 0.2)",
    svgIcon: <TradeinIcon />,
  },
  {
    name: "Analytics",
    bgColor: "rgba(255, 79, 182, 0.2)",
    svgIcon: <AnalyticsIcon />,
  },
];
const IconCardContainer = () => {
  return (
    <div className="flex justify-between px-6 mt-4 pb-[18px] border-b-[rgba(255,255,255,0.1)] border-b-[1px] border-solid">
      {lists.map((list, index) => (
        <IconCard
          key={index}
          name={list.name}
          bgColor={list.bgColor}
          svgIcon={list.svgIcon}
        />
      ))}
    </div>
  );
};

export default IconCardContainer;
