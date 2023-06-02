import React from "react";

const BeepComponent = () => {
  let datas = [
    {
      name: "Beep 057",
      number: "1",
    },
    {
      name: "Beep 057",
      number: "1",
    },
    {
      name: "Beep 057",
      number: "1",
    },
  ];
  return (
    <div className="flex ml-6 mt-1">
      {datas.map((data, index) => (
        <div className="flex">
          <span className="font-satoshi font-bold text-3xl leading-[30px] text-[#FFFFFF]">
            {data.name}
          </span>
          <div className="mt-2 ml-1 mr-1 items-end">
            <span className="font-satoshi font-bold text-sm leading-[21px] text-[#FFFFFF]">
              ( {data.number} ) &nbsp;
            </span>
            <span className="font-satoshi font-normal text-sm text-[rgba(255,255,255,0.7)]">
              / &nbsp;
            </span>
          </div>
        </div>
      ))}
      <div className="mt-2">
        <span className="font-satoshi font-bold text-sm leading-[21px] text-[#FFFFFF]">
          +4
        </span>
      </div>
    </div>
  );
};

export default BeepComponent;
