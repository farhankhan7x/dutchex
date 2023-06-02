import IconCard from "@/components/IconCard/IconCard";
import AirdropIcon from "@/Logo and Icons/AirdropIcon";
import AnalyticsIcon from "@/Logo and Icons/AnalyticsIcon";
import FindHoldersIcon from "@/Logo and Icons/FindHoldersIcon";
import NFTIcon from "@/Logo and Icons/NFTIcon";
import TradeinIcon from "@/Logo and Icons/TradeinIcon";

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
    <div className="flex justify-between px-6 mt-4">
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
