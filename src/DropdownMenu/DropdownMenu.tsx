import ProfilePhotoIcon from "@/Assets/ProfilePhotoIcon";
import React from "react";

const DropdownMenu = () => {
  return (
    <div className="px-[10.5px] w-[40.08%] py-2  flex border justify-between items-center rounded-lg border-solid border-[rgba(255,255,255,0.1)]  ">
      <ProfilePhotoIcon />
      <select
        className="shadow-none ring-0 border-0 bg-none bg-transparent shadow-none 
  @apply font-bold text-base leading-[24px] ml-2 text-[#FFFFFF] border-[none]"
      >
        <option value="au">0x31...c0b8 &nbsp;</option>
        <option value="ca">0x4a1...a6v3 &nbsp;</option>
        <option value="usa">0x5f3...cs6c &nbsp;</option>
      </select>
    </div>
  );
};

export default DropdownMenu;
