import React from "react";
import ActivityCard from "../ActivityCard/ActivityCard";
import ExclamationIcon from "@/Assets/ExclamationIcon";
import PieChartIcon from "@/Assets/PieChartIcon";
import TickIcon from "@/Assets/TickIcon";

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
    ProgressBar: "0%",
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
    ProgressBar: "42.6%",
  },
  {
    CreateBgColor: "#4798E3",
    CreateIcon: <TickIcon />,
    TimeAndDate: "2022-09-13 08:57:15 PST",
    NumberOne: "7/7",
    NumberTwo: "6",
    NumberThree: "1",
    ETHvalue: "0.00033 ETH",
    USDvalue: "$3.22 USD",
    FilledButtonText: "View in NFT Management",
    ButtonText: "Show Report",
    ProgressBar: "100%",
  },
];

const ActivityCardContainer = () => {
  return (
    <div className="gap-4 flex flex-col">
      {datas.map((data, index) => (
        <div key={index}>
          <ActivityCard
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
            ProgressBar={data.ProgressBar}
          />
        </div>
      ))}
    </div>
  );
};

export default ActivityCardContainer;
