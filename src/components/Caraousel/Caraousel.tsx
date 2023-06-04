import React, { useState } from "react";
import Image from "next/image";
import MainPhoto from "../../../public/BackgroundImage.png";
import one from "../../../public/Rectangle 148 (2).svg";
import two from "../../../public/Rectangle 150 (2).svg";
import three from "../../../public/Rectangle 151 (2).svg";
import four from "../../../public/Rectangle 152 (1).svg";
import LeftArrow from "@/Assets/LeftArrow";
import RightArrow from "@/Assets/RightArrow";

interface PhotoData {
  name: string;
  photo: any;
}

const Caraousel: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<string>("");

  const handlePhotoClick = (photoName: string) => {
    setSelectedPhoto(photoName);
  };

  const handleRightArrow = () => {
    const currentIndex = datas.findIndex((data) => data.name === selectedPhoto);
    const nextIndex = (currentIndex + 1) % datas.length;
    setSelectedPhoto(datas[nextIndex].name);
  };

  const handleLeftArrow = () => {
    const currentIndex = datas.findIndex((data) => data.name === selectedPhoto);
    const previousIndex = (currentIndex - 1 + datas.length) % datas.length;
    setSelectedPhoto(datas[previousIndex].name);
  };

  let datas: PhotoData[] = [
    {
      name: "one",
      photo: one,
    },
    {
      name: "two",
      photo: two,
    },
    {
      name: "three",
      photo: three,
    },
    {
      name: "four",
      photo: four,
    },
  ];

  const getMainPhotoSrc = () => {
    const selectedData = datas.find((data) => data.name === selectedPhoto);
    return selectedData ? selectedData.photo.src : MainPhoto;
  };

  return (
    <div className="flex items-center flex-col">
      <div className="cursor-pointer">
        <Image
          alt={"vdv"}
          src={getMainPhotoSrc()}
          width={"180"}
          height={"180"}
        />
      </div>
      <div className="flex mt-4 items-center w-full">
        <LeftArrow
          className="cursor-pointer"
          onClick={() => handleLeftArrow()}
        />
        <div className="flex ml-2 gap-2 w-[188px] h-[45px] items-center mr-2">
          {datas.map((data, index) => (
            <div
              key={index}
              className={`cursor-pointer w-[41px] h-[41px] ${
                data.name === selectedPhoto
                  ? "border-[1px] rounded-lg border-white-500"
                  : ""
              }`}
              onClick={() => handlePhotoClick(data.name)}
            >
              <Image
                alt={"vdv"}
                src={data.photo}
                className={data.name === selectedPhoto ? "outline" : ""}
              />
            </div>
          ))}
        </div>
        <RightArrow
          className="cursor-pointer"
          onClick={() => handleRightArrow()}
        />
      </div>
    </div>
  );
};

export default Caraousel;
