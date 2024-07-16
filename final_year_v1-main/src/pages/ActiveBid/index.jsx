import { Helmet } from "react-helmet";
import { Button, Img, Heading } from "../../components";
import ActiveBidProductcard from "../../components/ActiveBidProductcard";
import Header from "../../components/Header";
import Sidebar6 from "../../components/Sidebar6";
import React, { Suspense } from "react";

const data = [
  {
    image: "images/img_rectangle_2044_140x240.png",
    p2h4m32s: "2h 4m 32s",
    dayco: "Dayco Serpentine Belt",
    bymarvin: "By Marvin McKinney",
    currentbid: "Your Bid",
    ethcounter: "18,99 ETH",
    placeABid: "Place a Bid",
  },
  {
    image: "images/img_rectangle_2044_10.png",
    p2h4m32s: "2h 4m 32s",
    dayco: "Bosch Spark Plug",
    bymarvin: "By Guy Hawkins",
    currentbid: "Your Bid",
    ethcounter: "8,99 ETH",
    placeABid: "Place a Bid",
  },
  {
    image: "images/img_rectangle_2044_11.png",
    p2h4m32s: "2h 4m 32s",
    dayco: "Valvoline Engine oil",
    bymarvin: "By Albert Flores",
    currentbid: "Your Bid",
    ethcounter: "51,23 ETH",
    placeABid: "Place a Bid",
  },
  {
    image: "images/img_rectangle_2044_12.png",
    p2h4m32s: "2h 4m 32s",
    dayco: "Fram Oil Filter",
    bymarvin: "By Jerome Bell",
    currentbid: "Your Bid",
    ethcounter: "25,00 ETH",
    placeABid: "Place a Bid",
  },
];

export default function ActiveBidPage() {
  return (
    <>
      <Helmet>
        <title>AuctiGram</title>
        <meta name="description" content="web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700">
        <div className="flex items-start md:flex-col">
          <Sidebar6 />
          <div className="flex flex-1 flex-col items-center gap-[34px] md:self-stretch md:p-5">
            <Header className="self-stretch p-[34px]" />
            <div className="flex w-[94%] flex-col items-start gap-[22px] md:w-full">
              <Heading size="3xl" as="h1" className="tracking-[0.34px]">
                Active Bid
              </Heading>
              <div className="flex flex-col gap-[30px] self-stretch">
                <div className="flex justify-between gap-5 md:flex-col">
                  <div className="flex w-[59%] justify-center gap-6 md:w-full md:flex-col">
                    <Button
                      color="gray_100"
                      size="6xl"
                      variant="outline"
                      shape="round"
                      leftIcon={
                        <Img
                          src="images/img_settings_black_900_24x24.svg"
                          alt="settings"
                          className="h-[24px] w-[24px]"
                        />
                      }
                      className="w-full flex-1 gap-2.5 font-medium tracking-[0.16px] md:self-stretch"
                    >
                      On Going
                    </Button>
                    <Button
                      color="gray_100"
                      size="6xl"
                      variant="outline"
                      shape="round"
                      leftIcon={<Img src="images/img_grid_black_900.svg" alt="grid" className="h-[24px] w-[24px]" />}
                      className="w-full flex-1 gap-2.5 font-medium tracking-[0.16px] md:self-stretch"
                    >
                      Category
                    </Button>
                    <Button
                      color="gray_100"
                      size="6xl"
                      variant="outline"
                      shape="round"
                      leftIcon={<Img src="images/img_settings_black_900.svg" alt="settings" className="h-[24px] w-[24px]" />}
                      className="w-full flex-1 gap-2.5 font-medium tracking-[0.16px] md:self-stretch"
                    >
                      Collection
                    </Button>
                    <Button
                      color="gray_100"
                      size="6xl"
                      variant="outline"
                      shape="round"
                      leftIcon={<Img src="images/img_user_black_900.svg" alt="user" className="h-[24px] w-[24px]" />}
                      className="min-w-[151px] gap-2.5 font-medium tracking-[0.16px]"
                    >
                      Price Range
                    </Button>
                </div>
                <Button
                  color="gray_100"
                  size="6xl"
                  variant="outline"
                  shape="round"
                  leftIcon={<Img src="images/img_thumbsup.svg" alt="thumbs_up" className="h-[24px] w-[24px]" />}
                  className="min-w-[151px] gap-2.5 font-medium tracking-[0.16px]"
                >
                  Filter & Sort
                </Button>
              </div>
              <div className="flex gap-[19px] md:flex-col">
                <Suspense fallback={<div>Loading feed...</div>}>
                  {data.map((d, index) => (
                    <ActiveBidProductcard {...d} key={"productlists" + index} />
                  ))}
                </Suspense>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
