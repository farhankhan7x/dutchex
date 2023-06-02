import Image from "next/image";
import React from "react";
import MainPhoto from "../../../public/BackgroundImage.png";
import one from "../../../public/1stbg.png";
import two from "../../../public/2ndbg.png";
import three from "../../../public/3rdbg.png";
import four from "../../../public/4thbg.png";
import LeftArrow from "@/Assets/LeftArrow";
import RightArrow from "@/Assets/RightArrow";
import MainBg from "@/Assets/MainBg";

const Caraousel = () => {
  let datas = [
    {
      photo: one,
    },
    {
      photo: two,
    },
    {
      photo: three,
    },
    {
      photo: four,
    },
  ];
  return (
    <div className=" flex items-center flex-col ">
      <div>
        <Image alt={"vdv"} src={MainPhoto} />
        {/* <MainBg /> */}
      </div>
      <div className="flex mt-4 items-center w-full">
        <LeftArrow />
        <div className="flex ml-2 gap-2 mr-2">
          {datas.map((data, index) => (
            <div key={index}>
              <Image alt={"vdv"} src={data.photo} />
            </div>
          ))}
        </div>
        <RightArrow />
      </div>
    </div>
  );
};

export default Caraousel;
