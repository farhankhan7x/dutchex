import React from "react";
import OverviewComponent from "../OverviewComponent/OverviewComponent";

const OverviewComponentContainer = () => {
  let datas = [
    {
      FirstText: "Wallet balance",
      SecondText: "0.489 ETH",
    },
    {
      Title: "NFTs",
      FirstText: "NFT fetched",
      SecondText: "187",
      FirstText1: "Collections",
      SecondText1: "5",
      FirstText2: "Minted",
      SecondText2: "39",
    },
    {
      Title: "Saved Searches",
      FirstText: "Green apple",
      FirstText1: "Christmas tree",
    },
    {
      Title: "Recent Activity",
      FirstText: "Settings > Account",
      FirstText1: "Sales reports",
    },
  ];
  return (
    <div className="flex flex-col pl-6 w-full ">
      <span className="font-satoshi text-2xl font-normal leading-8 text-[rgba(255,255,255,0.5)]">
        Overview
      </span>
      {datas.map((data, index) => (
        <div key={index}>
          <OverviewComponent
            Title={data.Title}
            FirstText={data.FirstText}
            FirstText1={data.FirstText1}
            FirstText2={data.FirstText2}
            SecondText={data.SecondText}
            SecondText1={data.SecondText1}
            SecondText2={data.SecondText2}
          />
        </div>
      ))}
    </div>
  );
};

export default OverviewComponentContainer;
