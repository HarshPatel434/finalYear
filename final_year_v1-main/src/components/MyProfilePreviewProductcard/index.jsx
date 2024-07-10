import { Text, Heading, Button, Img } from "./..";
import React from "react";

export default function MyProfilePreviewProductcard({
  image = "images/img_rectangle_2044_9.png",
  ended = "Ended",
  diehardbattery = "Diehard BATTERY-SILVER",
  byralph = "By Ralph Edwards",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col w-full gap-5 p-1.5 bg-white-A700 shadow-xs rounded-[15px]`}
    >
      <div className="relative h-[193px] self-stretch md:h-auto">
        <Img
          src={image}
          alt="image"
          className="h-[193px] w-full rounded-[12px] object-cover"
        />
        <div className="absolute right-[8.00px] top-[8.00px] m-auto flex items-center gap-2">
          <Button size="xs" shape="round" className="min-w-[75px] font-medium tracking-[0.12px]">
            {ended}
          </Button>
          <Button shape="circle" className="w-[30px] rounded-[15px]">
            <Img src="images/img_favorite_red_600.svg" />
          </Button>
        </div>
      </div>
      <div className="mb-[11px] ml-2 flex flex-col items-start gap-1.5 md:ml-0">
        <Heading as="h6" className="tracking-[0.16px]">
          {diehardbattery}
        </Heading>
        <Text size="s" as="p" className="tracking-[0.12px]">
          {byralph}
        </Text>
      </div>
    </div>
  );
}
