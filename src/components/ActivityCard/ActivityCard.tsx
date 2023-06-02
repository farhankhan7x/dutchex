// import ProfilePhotoIcon from "../../../public/BackgroundImage.png";
import ClockIcon from "@/Assets/ClockIcon";
import ExclamationIcon from "@/Assets/ExclamationIcon";
import React from "react";
import BeepComponent from "../BeepComponent/BeepComponent";
import DiffFuelcon from "@/Assets/DiffFuelcon";
import CirclelExclamationIcon from "@/Assets/CirclelExclamationIcon";
import Button from "../Button/Button";
import Caraousel from "../Caraousel/Caraousel";
import ButtonFilled from "../ButtonFilled/ButtonFilled";

interface Props {
  CreateBgColor: any;
  CreateIcon: React.ReactNode;
  TimeAndDate: any;
  NumberOne: any;
  NumberTwo: any;
  NumberThree: any;
  ETHvalue: any;
  USDvalue: any;
  FilledButtonText: any;
  ButtonText: any;
}

const ActivityCard: React.FC<Props> = ({
  CreateBgColor,
  CreateIcon,
  TimeAndDate,
  NumberOne,
  NumberTwo,
  NumberThree,
  ETHvalue,
  USDvalue,
  FilledButtonText,
  ButtonText,
}) => {
  return (
    // <div className="h-[286px]  rounded-lg flex justify-between py-6  backdrop-blur-40 bg-gradient-to-r from-fuchsia-500 to-cyan-500">
    <div className="h-[286px]  rounded-lg flex justify-between py-6  backdrop-blur-40 bg-gradient-to-r from-gray-800 to-gray-500">
      <div className="flex w-[70.69%] flex-col  ">
        <div className="flex">
          <div
            className="flex w-[105px] items-center py-[4.5px] rounded-r-lg pl-[23px] pr-[12px] bg-[#DF4141]"
            style={{ backgroundColor: CreateBgColor }}
          >
            {CreateIcon}
            <span className="font-satoshi text-[#FFFFFF] ml-[6px] font-bold leading-[18px] text-xs">
              CREATE
            </span>
          </div>
          <div className="flex items-center ml-[13.5px]">
            <ClockIcon />
            <span className="ml-[9.5px] font-normal text-sm text-[rgba(255,255,255,0.7)]">
              {TimeAndDate}
            </span>
          </div>
        </div>
        <span className=" ml-6 mt-[16px] font-normal text-base leading-6 text-[#FFFFFF]">
          Beep
        </span>
        <BeepComponent />
        <div className="flex items-center">
          <div className=" relative flex justify-between py-1   rounded-lg mt-4 ml-6 border-[rgba(255,255,255,0.1)] border-[1px] border-solid">
            <div className="flex px-4">
              {" "}
              <span className="font-bold text-sm leading-[21px] text-[#FFFFFF]">
                {NumberOne}
              </span>
              <span className="font-satoshi font-normal ml-1 text-sm leading-[21px] text-[rgba(255,255,255,0.7)]">
                {" "}
                Minting
              </span>
            </div>
            <div className="flex border-[rgba(255,255,255,0.1)] px-4 border-l-[1px] border-solid">
              {" "}
              <span className="font-bold  text-sm leading-[21px] text-[#FFFFFF]">
                {NumberTwo}
              </span>
              <span className="font-satoshi ml-1 font-normal text-sm leading-[21px] text-[rgba(255,255,255,0.7)]">
                {" "}
                Success
              </span>
            </div>
            <div className=" flex border-[rgba(255,255,255,0.1)] px-4 border-l-[1px] border-solid">
              {" "}
              <span className="font-bold text-sm leading-[21px] text-[#FFFFFF]">
                {NumberThree}
              </span>
              <span className="font-satoshi font-normal ml-1 mr-1 text-sm leading-[21px] text-[rgba(255,255,255,0.7)]">
                {" "}
                Failed
              </span>
            </div>
            <div className="absolute right-[-10px] top-[-10px] ">
              <CirclelExclamationIcon />
            </div>
          </div>
          <div className="flex items-center mt-4  ml-[20px]">
            <DiffFuelcon />
            <span className="ml-[11px] font-normal text-sm text-[rgba(255,255,255,0.7)]">
              {ETHvalue}
            </span>
            <span className="ml-2 font-normal text-sm text-[rgba(255,255,255,0.7)]">
              {USDvalue}
            </span>
          </div>
        </div>
        <div className=" ml-6 mt-4 rounded-lg h-4 bg-[rgba(255,255,255,0.1)]"></div>
        <div className="ml-6 flex mt-4">
          {FilledButtonText && <ButtonFilled ButtonText={FilledButtonText} />}

          {ButtonText && <Button ButtonText={ButtonText} />}
        </div>
      </div>
      <div className="w-[full] mr-6 justify-center">
        <Caraousel />
      </div>
    </div>
  );
};

export default ActivityCard;
