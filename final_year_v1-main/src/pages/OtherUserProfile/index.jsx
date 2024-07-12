import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Button, Text, Img, Heading, Input } from "../../components";
import Header from "../../components/Header";
import Sidebars from "../../components/Sidebars";
import React, { useState } from "react";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";

export default function OtherUserProfilePage() {
  const [searchBarValue, setSearchBarValue] = useState("");

  return (
    <>
      <Helmet>
        <title>AuctiGram</title>
        <meta name="description" content="web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700">
        <div className="flex items-start md:flex-col">
          <Sidebars />
          <div className="relative h-[1064px] flex-1 md:h-auto md:w-full md:flex-none md:self-stretch md:p-5">
            <Img src="images/img_rectangle_2057.png" alt="image" className="mt-[124px] h-[260px] w-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 top-auto flex h-max w-full flex-col items-center gap-44 md:gap-[132px] sm:gap-[88px]">
              <Header className="self-stretch p-[34px]" />
              <div className="flex w-[94%] items-start gap-[34px] md:w-full md:flex-col">
                <div className="flex w-[23%] flex-col items-center justify-end gap-[23px] rounded-[15px] bg-white-A700 p-[18px] shadow-xs md:w-full">
                  <div className="mt-4 flex w-[86%] flex-col items-center gap-4 md:w-full">
                    <Img
                      src="images/img_ellipse_1022.png"
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
                  <Text as="p" className="w-full text-center font-normal leading-[180%] tracking-[0.14px]">
                    Dedicated to create amazing art exhibition information, please check the link below:
                  </Text>
                  <div className="flex items-center gap-1.5">
                    <Img src="images/img_globe_black_900.svg" alt="globe" className="h-[18px] w-[18px]" />
                    <Text size="s" as="p" className="font-normal tracking-[0.12px] !text-black-900">
                      artistictea.io
                    </Text>
                  </div>
                  <div className="flex gap-3 self-start">
                    <Button
                      color="gray_900_01"
                      size="md"
                      className="min-w-[88px] rounded-lg font-medium tracking-[0.12px] sm:px-5"
                    >
                      Follow
                    </Button>
                    <Button color="gray_100" variant="outline" className="w-[32px] rounded-lg">
                      <Img src="images/img_twitter.svg" />
                    </Button>
                    <Button color="gray_100" variant="outline" className="w-[32px] rounded-lg">
                      <Img src="images/img_info.svg" />
                    </Button>
                  </div>
                  <div className="h-px self-stretch bg-gray-100" />
                  <Text as="p" className="mb-[9px] font-normal tracking-[0.14px]">
                    Joined April 2021
                  </Text>
                </div>
                <Tabs
                  className="mt-[118px] flex flex-1 flex-col gap-[34px] md:self-stretch"
                  selectedTabClassName="text-white-A700 font-medium text-sm bg-black-900 rounded-[18px]"
                  selectedTabPanelClassName="relative tab-panel--selected"
                >
                  <div className="flex justify-between gap-5 sm:flex-col">
                    <TabList className="flex gap-3">
                      <Tab className="flex items-center gap-2.5 rounded-[18px] bg-black-900 p-2">
                        <Img src="images/img_grid_white_a700.svg" alt="grid" className="h-[20px] w-[20px]" />
                        <Text as="p" className="tracking-[0.14px] !text-white-A700">
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
                      color="gray_300"
                      size="xs"
                      variant="outline"
                      name="search"
                      placeholder="Search by name"
                      value={searchBarValue}
                      onChange={(e) => setSearchBarValue(e.target.value)}
                      prefix={
                        <Img
                          src="images/img_contrast_gray_500.svg"
                          alt="contrast"
                          className="h-[18px] w-[18px] cursor-pointer"
                        />
                      }
                      suffix={
                        searchBarValue?.length > 0 ? (
                          <CloseSVG
                            onClick={() => setSearchBarValue("")}
                            height={18}
                            width={18}
                            fillColor="#93989A"
                          />
                        ) : null
                      }
                      className="w-[25%] gap-3.5 rounded-lg tracking-[0.12px] text-gray-500 sm:w-full sm:pr-5"
                    />
                  </div>
                  {[...Array(3)].map((_, index) => (
                    <TabPanel key={`tab-panel${index}`} className="absolute justify-center">
                      <div className="w-full">
                        <div className="grid grid-cols-3 gap-[19px] md:grid-cols-2 sm:grid-cols-1">
                          <div className="mb-[298px] mr-[542px] flex w-full flex-col items-center gap-[18px] rounded-[15px] bg-white-A700 p-1.5 shadow-xs">
                            <div className="relative h-[140px] self-stretch md:h-auto">
                              <Img
                                src="images/img_rectangle_2044_13.png"
                                alt="image"
                                className="h-[140px] w-full rounded-[12px] object-cover"
                              />
                              <div className="absolute right-[8.00px] top-[8.00px] m-auto flex items-center gap-2">
                                <Button size="xs" shape="round" className="min-w-[75px] font-medium tracking-[0.12px]">
                                  2h 4m 32s
                                </Button>
                                <Button shape="circle" className="w-[30px] rounded-[15px]">
                                  <Img src="images/img_favorite_red_600.svg" />
                                </Button>
                              </div>
                            </div>
                            <div className="ml-2 flex flex-col items-start justify-center gap-1 self-start md:ml-0">
                              <Heading as="h2" className="tracking-[0.16px]">
                                Person Melirik Kesamping
                              </Heading>
                              <Text size="s" as="p" className="tracking-[0.12px]">
                                By Eleanor Pena
                              </Text>
                            </div>
                            <div className="mb-3 flex items-center justify-between gap-5 self-stretch">
                              <div className="flex flex-col items-start gap-1">
                                <Text size="xs" as="p" className="font-outfit tracking-[0.10px]">
                                  Current Bid
                                </Text>
                                <div className="flex items-center gap-1.5 self-center">
                                  <Img
                                    src="images/img_television_gray_900_01.svg"
                                    alt="242 eth"
                                    className="h-[16px] w-[16px] self-start"
                                  />
                                  <Text as="p" className="font-semibold tracking-[0.14px]">
                                    2.42 ETH
                                  </Text>
                                </div>
                              </div>
                              <Button color="gray_900_01" size="sm" className="rounded-[10px] min-w-[88px]">
                                Place a Bid
                              </Button>
                            </div>
                          </div>
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
