// MyProfilePreviewPage.js

import { Helmet } from "react-helmet";
import { closeSVG } from "../../assets/images";
import { Input, Img, Text, Button, Heading } from "../../components";
import Header from "../../components/Header";
import MyProfilePreviewProductcard from "../../components/MyProfilePreviewProductcard";
import Sidebar8 from "../../components/Sidebar8";
import React, { Suspense } from "react";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";

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
    byralph: "By Angelina Cruzz",
  },
];

export default function MyProfilePreviewPage() {
  const [searchBarValue10, setSearchBarValue10] = React.useState("");

  return (
    <>
      <Helmet>
        <title>AuctiGram</title>
        <meta name="description" content="web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700">
        <div className="flex items-start md:flex-col">
          <Sidebar8 />
          <div className="flex-1 md:self-stretch md:p-5">
            <Header className="p-[34px]" />
            <div className="flex flex-col items-center">
              <div className="flex h-[260px] items-end justify-end self-stretch bg-[url(/public/images/img_group_33879.png)] bg-cover bg-no-repeat p-[34px] md:p-5">
                <Button color="white_A700" size="lg" shape="circle" className="mt-[156px] w-[36px] !rounded-[18px]">
                  <Img src="images/img_television_black_900.svg" />
                </Button>
              </div>
              <div className="relative mt-[-84px] flex w-[94%] items-start gap-[34px] md:w-full md:flex-col">
                <div className="flex w-[23%] flex-col items-center justify-end gap-[23px] rounded-[15px] bg-white-A700 p-[18px] shadow-xs md:w-full">
                  <div className="mt-4 flex w-[86%] flex-col items-center gap-4 md:w-full">
                    <Img
                      src="images/img_ellipse_1027_100x100.png"
                      alt="circleimage"
                      className="h-[100px] w-[100px] rounded-[50%]"
                    />
                    <div className="flex flex-col items-center justify-center gap-1">
                      <Heading size="lg" as="h1" className="tracking-[0.20px]">
                        Eleanor Pena
                      </Heading>
                      <div className="flex items-center gap-1.5 self-start">
                        <Text size="s" as="p" className="self-end tracking-[0.12px]">
                          0x864784f44ajf84bskw4w...
                        </Text>
                        <Img src="images/img_copy.svg" alt="copy" className="h-[18px] w-[18px]" />
                      </div>
                    </div>
                  </div>
                  <Text as="p" className="w-full text-center !font-normal leading-[180%] tracking-[0.14px]">
                    Dedicated to create amazing for art exhibition information please check link below:
                  </Text>
                  <div className="flex items-center gap-1.5">
                    <Img src="images/img_globe_black_900.svg" alt="globe" className="h-[18px] w-[18px]" />
                    <Text size="s" as="p" className="self-end !font-normal tracking-[0.12px] !text-black-900">
                      xyz.com
                    </Text>
                  </div>
                  <div className="flex gap-3 self-start">
                    <Button
                      color="gray_900_01"
                      size="md"
                      className="min-w-[88px] rounded-lg font-medium tracking-[0.12px]"
                    >
                      Edit Profile
                    </Button>
                    <Button color="gray_100" variant="outline" className="w-[32px] rounded-lg">
                      <Img src="images/img_twitter.svg" />
                    </Button>
                    <Button color="gray_100" variant="outline" className="w-[32px] rounded-lg">
                      <Img src="images/img_info.svg" />
                    </Button>
                  </div>
                  <div className="h-px self-stretch bg-gray-100" />
                  <Text as="p" className="mb-2.5 !font-normal tracking-[0.14px]">
                    Joined November 2021
                  </Text>
                </div>
                <Tabs
                  className="mt-[118px] flex flex-1 flex-col gap-[30px] md:self-stretch"
                  selectedTabClassName="text-white-A700 font-medium text-sm bg-black-900 rounded-[18px]"
                  selectedTabPanelClassName="relative tab-panel--selected"
                >
                  <div className="flex justify-between gap-5 sm:flex-col">
                    <TabList className="flex gap-3">
                      <Tab className="flex items-center gap-2.5 rounded-[18px] bg-black-900 p-2">
                        <Img src="images/img_grid_white_A700.svg" alt="grid" className="h-[20px] w-[20px]" />
                        <Text as="p" className="tracking-[0.14px] text-white-A700">
                          Created
                        </Text>
                      </Tab>
                      <Tab className="flex items-center gap-2.5 p-2">
                        <Img src="images/img_music.svg" alt="music" className="h-[20px] w-[20px]" />
                        <Text as="p" className="tracking-[0.14px]">
                          Collection
                        </Text>
                      </Tab>
                      <Tab className="flex items-center gap-2.5 p-[7px]">
                        <Img src="images/img_clock.svg" alt="clock" className="h-[20px] w-[20px]" />
                        <Text as="p" className="self-end tracking-[0.14px]">
                          History
                        </Text>
                      </Tab>
                    </TabList>
                    <Input
                      color="gray_50"
                      size="xs"
                      name="search"
                      placeholder={"Search by name"}
                      value={searchBarValue10}
                      onChange={(e) => setSearchBarValue10(e.target.value)}
                      prefix={
                        <Img
                          src="images/img_contrast_gray_500.svg"
                          alt="contrast"
                          className="h-[18px] w-[18px] cursor-pointer"
                        />
                      }
                      suffix={
                        searchBarValue10?.length > 0 ? (
                          <Img
                            src={closeSVG}
                            onClick={() => setSearchBarValue10("")}
                            height={18}
                            width={18}
                            fillColor="#93989A"
                            className="cursor-pointer"
                          />
                        ) : null
                      }
                      className="w-[25%] gap-3.5 rounded-lg tracking-[0.12px] sm:w-full sm:pr-5"
                    />
                  </div>
                  {[...Array(3)].map((_, index) => (
                    <TabPanel key={`tab-panel${index}`} className="absolute justify-center">
                      <div className="w-full">
                        <div className="grid grid-cols-3 gap-5 md:grid-cols-2 sm:grid-cols-1">
                          <Suspense fallback={<div>Loading feed...</div>}>
                            {data.map((d, idx) => (
                              <MyProfilePreviewProductcard
                                {...d}
                                key={"myprofile" + idx}
                                className="mb-[298px] mr-[544px]"
                              />
                            ))}
                          </Suspense>
                        </div>
                      </div>
                    </TabPanel>
                  ))}
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
