import React from "react";
import Image from "next/image";
import DutchxLogo from "@/Assets/DutchXlogo";
import Dot from "../Dot/Dot";
import SearchBar from "../Searchbar/SearchBar";
import BellIcon from "@/Assets/BellIcon";
import GasIcon from "@/Assets/GasIcon";
import DropdownMenu from "@/DropdownMenu/DropdownMenu";

const Header = () => {
  return (
    <div className="flex w-full justify-between items-center h-16  px-6 border-b-[rgba(255,255,255,0.1)] border-b-[1px] border-solid">
      <div>
        <DutchxLogo />
      </div>
      <div className="flex flex-row w-[30.6%] mt-2 justify-between items-start	">
        <div className="flex flex-col items-center">
          <span className="font-satoshi font-bold text-base leading-6 text-white">
            Dashboard
          </span>
          <Dot className="!bg-[#FF5A19] w-[5px] h-[5px]" />
        </div>
        <span className="font-satoshi font-normal text-base leading-6 text-[rgba(255,255,255,0.7)]">
          Create
        </span>
        <div className="flex flex-col items-start">
          <span className="font-satoshi font-normal text-base leading-6 text-[rgba(255,255,255,0.7)]">
            Marketplace
          </span>
          <span className="font-satoshi font-medium text-xs leading-[7px]  text-[#FF5A19]">
            Coming soon
          </span>
        </div>
        <span className="font-satoshi font-normal text-base leading-6 text-[rgba(255,255,255,0.7)]">
          Roadmap
        </span>
      </div>
      <SearchBar />
      <div className=" w-[30.6%] flex justify-between items-center ">
        <div className="rounded flex justify-between items-center h-[26px]  px-2 py-1 bg-[rgba(112,188,99,0.2)]">
          <Dot className="!bg-[#70BC63]" />
          <span className=" ml-2 font-satoshi font-bold text-xs leading-[7px] uppercase text-[#70BC63]">
            status
          </span>
        </div>
        <div className="flex  justify-between  items-center ">
          <GasIcon />
          <span className="  whitespace-nowrap ml-2 text-sm leading-[21px] font-normal text-[#FFFFFF] ">
            $0.14 USD
          </span>
        </div>
        <div className="">
          <BellIcon />
        </div>
        <DropdownMenu />
      </div>
    </div>
  );
};

export default Header;
