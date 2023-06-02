import React from "react";
import ActivityCard from "../ActivityCard/ActivityCard";
import ExclamationIcon from "@/Logo and Icons/ActivityLogosandIcons/ExclamationIcon";
import PieChartIcon from "@/Logo and Icons/ActivityLogosandIcons/PieChartIcon";
import TickIcon from "@/Logo and Icons/ActivityLogosandIcons/TickIcon";

let datas = [
  {
    CreateBgColor: "#DF4141",
    CreateIcon: <ExclamationIcon />,
    TimeAndDate: "2022-09-13 08:57:15 PST",
    NumberOne: "0/7",
    NumberTwo: "0",
    NumberThree: "7",
    ETHvalue: "0 ETH",
    USDvalue: "$0 USD",
    FilledButtonText: "",
    ButtonText: "Show Report",
  },
  {
    CreateBgColor: "#70BC63",
    CreateIcon: <PieChartIcon />,
    TimeAndDate: "2022-09-13 08:57:15 PST",
    NumberOne: "7/7",
    NumberTwo: "6",
    NumberThree: "1",
    ETHvalue: "0.00033 ETH",
    USDvalue: "$3.22 USD",
    FilledButtonText: "View Progress",
    ButtonText: "Stop Minting",
  },
  {
    CreateBgColor: "#4798E3",
    CreateIcon: <TickIcon />,
    TimeAndDate: "Stop Minting",
    NumberOne: "7/7",
    NumberTwo: "6",
    NumberThree: "1",
    ETHvalue: "0.00033 ETH",
    USDvalue: "$3.22 USD",
    FilledButtonText: "View in NFT Management",
    ButtonText: "Show Report",
  },
];

const ActivityCardContainer = () => {
  return (
    <div className="gap-4 flex flex-col">
      {datas.map((data, index) => (
        <div>
          <ActivityCard
            key={index}
            CreateBgColor={data.CreateBgColor}
            CreateIcon={data.CreateIcon}
            TimeAndDate={data.TimeAndDate}
            NumberOne={data.NumberOne}
            NumberTwo={data.NumberTwo}
            NumberThree={data.NumberThree}
            ETHvalue={data.ETHvalue}
            USDvalue={data.USDvalue}
            FilledButtonText={data.FilledButtonText}
            ButtonText={data.ButtonText}
          />
        </div>
      ))}
    </div>
  );
};

export default ActivityCardContainer;
