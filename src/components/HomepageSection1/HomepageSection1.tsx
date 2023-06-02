import React from "react";
import RecentactivityComponent from "../RecentactivityComponent/RecentactivityComponent";
import ActivityCard from "../ActivityCard/ActivityCard";
import ActivityCardContainer from "../ActivityCardContainer/ActivityCardContainer";
import OverviewComponentContainer from "../OverviewComponentContainer/OverviewComponentContainer";

const HomepageSection1 = () => {
  return (
    <div className="flex w-[screen] pt-8 px-6">
      <div className="w-[74.59%] ">
        {/* left part */}
        <div className="flex items-center">
          <span className="font-satoshi text-2xl font-normal leading-8 text-[rgba(255,255,255,0.5)]">
            Recent Activity
          </span>
          <RecentactivityComponent />
        </div>
        <div className="mt-2">
          <ActivityCardContainer />
        </div>
      </div>
      <div className="w-[25.41%]">
        <OverviewComponentContainer />
      </div>
    </div>
  );
};

export default HomepageSection1;
