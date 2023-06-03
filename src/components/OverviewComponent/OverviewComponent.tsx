import BigRightArrow from "@/Assets/BigRightArrow";
import React from "react";

interface Props {
  Title: React.ReactNode;
  FirstText: React.ReactNode;
  FirstText1?: React.ReactNode;
  FirstText2?: React.ReactNode;
  SecondText: React.ReactNode;
  SecondText1?: React.ReactNode;
  SecondText2?: React.ReactNode;
}

const OverviewComponent: React.FC<Props> = ({
  Title,
  FirstText,
  FirstText1,
  FirstText2,
  SecondText,
  SecondText1,
  SecondText2,
}) => {
  let datas = [
    {
      FirstTextx: FirstText,
      SecondTextx: SecondText,
    },
    {
      FirstTextx: FirstText1,
      SecondTextx: SecondText1,
    },
    {
      FirstTextx: FirstText2,
      SecondTextx: SecondText2,
    },
  ];

  return (
    <div className="flex flex-col gap-6 w-full mt-2 px-6 py-3 rounded-lg border-[rgba(255,255,255,0.1)] border-[1px] border-solid">
      {Title && (
        <h2 className="font-satoshi font-medium text-xl leading-[30px] text-white">
          {Title}
        </h2>
      )}
      {datas.map((data, index) => (
        // Conditional rendering of the outer div
        <React.Fragment key={index}>
          {data.FirstTextx && (
            <div className="flex w-full justify-between items-center ">
              <span className="font-satoshi font-normal text-base leading-6 text-[rgba(255,255,255,0.6)] cursor-pointer">
                {data.FirstTextx}
              </span>
              <div className="flex items-center cursor-pointer">
                <span className="font-satoshi font-normal ml-4 mr-[20.17px] text-base leading-6 text-[rgba(255,255,255,0.6)]">
                  {data.SecondTextx}
                </span>
                <BigRightArrow />
              </div>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default OverviewComponent;
