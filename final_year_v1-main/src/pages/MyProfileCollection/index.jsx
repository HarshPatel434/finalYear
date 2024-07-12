import { Helmet } from "react-helmet";
import { Button, Img, Heading } from "../../components";
import Header from "../../components/Header";
import MyProfilePreviewProductcard from "../../components/MyProfilePreviewProductcard";
import Sidebars from "../../components/Sidebar9"; // Correct import statement
import React, { Suspense } from "react";

const data = [
  {
    image: "images/img_rectangle_2044_9.png",
    ended: "Ended",
    diehardbattery: "Diehard BATTERY-SILVER",
    byralph: "By Ralph Edwards",
  },
  {
    image: "images/img_rectangle_2044_140x240.png",
    ended: "2h 4m 32s",
    diehardbattery: "Dayco Serpentine Belt",
    byralph: "By Marvin McKinney",
  },
  {
    image: "images/img_rectangle_2044_10.png",
    ended: "Ended",
    diehardbattery: "Bosch Spark Plug",
    byralph: "By Guy Hawkins",
  },
  {
    image: "images/img_rectangle_2044_12.png",
    ended: "Ended",
    diehardbattery: "Fram Oil Filter",
    byralph: "By Jerome Bell",
  },
  {
    image: "images/img_rectangle_2044_7.png",
    ended: "2h 4m 32s",
    diehardbattery: "Fram Oil Filter",
    byralph: "By Eleanor Pena",
  },
  {
    image: "images/img_rectangle_2044_2.png",
    ended: "2h 4m 32s",
    diehardbattery: "Mad Ballot Holder",
    byralph: "By Angelina Cruz",
  },
];

export default function MyProfileCollectionPage() {
  return (
    <>
      <Helmet>
        <title>AuctiGram</title>
        <meta name="description" content="web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700">
        <div className="flex items-start md:flex-col">
          <Sidebars />
          <div className="flex flex-1 flex-col items-center gap-[34px] md:self-stretch md:p-5">
            <Header className="self-stretch p-[34px]" />
            <div className="flex w-[94%] flex-col items-start gap-[26px] md:w-full">
              <Heading size="3x1" as="h1" className="tracking-[0.34px]">
                Collection
              </Heading>
              <div className="flex justify-between gap-5 self-stretch md:flex-col">
                <div className="flex w-[44%] justify-center gap-6 md:w-full sm:flex-col">
                  <Button
                    color="gray_100"
                    size="6x1"
                    variant="outline"
                    shape="round"
                    leftIcon={<Img src="images/img_grid_black_900.svg" alt="grid" className="h-[24px] w-[24px]" />}
                    className="w-full flex-1 gap-2.5 font-medium tracking-[0.16px] sm:self-stretch"
                  >
                    Category
                  </Button>
                  <Button
                    color="gray_100"
                    size="6x1"
                    variant="outline"
                    shape="round"
                    leftIcon={<Img src="images/img_settings_black_900.svg" alt="settings" className="h-[24px] w-[24px]" />}
                    className="w-full flex-1 gap-2.5 font-medium tracking-[0.16px] sm:self-stretch"
                  >
                    Collection
                  </Button>
                  <Button
                    color="gray_100"
                    size="6x1"
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
                  size="6x1"
                  variant="outline"
                  shape="round"
                  leftIcon={<Img src="images/img_thumbsup.svg" alt="thumbs_up" className="h-[24px] w-[24px]" />}
                  className="min-w-[151px] gap-2.5 font-medium tracking-[0.16px]"
                >
                  Filter & Sort
                </Button>
              </div>
              <div className="grid grid-cols-4 gap-5 self-stretch md:grid-cols-2 sm:grid-cols-1">
                <Suspense fallback={<div>Loading feed...</div>}>
                  {data.map((d, index) => (
                    <MyProfilePreviewProductcard
                      key={`gridended${index}`}
                      image={d.image}
                      ended={d.ended}
                      diehardbattery={d.diehardbattery}
                      byralph={d.byralph}
                      className="mb-[298px] mr-[816px]"
                    />
                  ))}
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
