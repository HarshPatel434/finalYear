import { Button, Text, Img, Heading } from 'components'; // Make sure to import the correct components
import React from "react";

export default function ActiveBidProductCard({
  image = "images/img_rectangle_2044_140x240.png",
  p2h4m32s = "2h 4m 32s",
  dayco = "Dayco Serpentine Belt",
  byMarvin = "By Marvin McKinney",
  currentBid = "Your Bid",
  ethCounter = "18.99 ETH",
  placeABid = "Place a Bid",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center w-full gap-[18px] p-1.5 bg-white-A700 shadow-xs rounded-[15px]`}
    >
      <div className="relative h-[140px] self-stretch md:h-auto">
        <Img src={image} alt="product image" className="h-[140px] w-full rounded-[12px] object-cover" />
        <div className="absolute right-[8.00px] top-[8.00px] m-auto flex items-center gap-2">
          <Button size="xs" shape="round" className="min-w-[75px] font-medium tracking-[0.12px]">
            {p2h4m32s}
          </Button>
          <Button shape="circle" className="w-[30px] rounded-[15px]">
            <Img src="images/img_settings.svg" alt="settings" />
          </Button>
        </div>
      </div>
      <div className="ml-2 flex flex-col items-start justify-center gap-1 self-start md:ml-0">
        <Heading as="h6" className="tracking-[0.16px]">
          {dayco}
        </Heading>
        <Text size="s" as="p" className="tracking-[0.12px]">
          {byMarvin}
        </Text>
      </div>
      <div className="mb-3 flex items-center justify-between gap-5 self-stretch">
        <div className="flex flex-col items-start gap-1">
          <Text size="xs" as="p" className="!font-outfit tracking-[0.10px]">
            {currentBid}
          </Text>
          <div className="flex items-center gap-1.5 self-center">
            <Img src="images/img_television_gray_900_01.svg" alt="eth icon" className="h-[16px] w-[16px]" />
            <Text as="p" className="tracking-[0.14px] !text-black-900">
              {ethCounter}
            </Text>
          </div>
        </div>
        <Button color="gray_900_01" size="md" className="min-w-[88px] rounded-lg font-medium tracking-[0.12px]">
          {placeABid}
        </Button>
      </div>
    </div>
  );
}
