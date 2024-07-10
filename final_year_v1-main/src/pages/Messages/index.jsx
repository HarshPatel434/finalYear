import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Input, Img, Text, Heading } from "../../components";
import MessageRowkristin from "../../components/MessageRowkristin";
import Sidebar11 from "../../components/Sidebar11";
import React, { Suspense } from "react";

const data = [
  { kristinwatson: "Kristin Watson", wowthisis: "Wow, this is really epic", time: "18:00" },
  { kristinwatson: "Darlene Robertson", wowthisis: "Wow, this is really epic", time: "08:00" },
  { kristinwatson: "Arlene McCoy", wowthisis: "perfect!", time: "11:00" },
  { kristinwatson: "Ralph Edwards", wowthisis: "I'll be there in 2 mins", time: "11:30" },
  { kristinwatson: "Darrell Steward", wowthisis: "Haha that's terrifying", time: "13:00" },
  { kristinwatson: "Kathryn Murphy", wowthisis: "woohoooo", time: "09:30" },
  { kristinwatson: "Eleanor Pena", wowthisis: "omg, this is amazing", time: "09:00" },
  { kristinwatson: "Cody Fisher", wowthisis: "aww", time: "12:00" },
  { kristinwatson: "Wade Warren", wowthisis: "Haha oh man", time: "12:30" },
  { kristinwatson: "Theresa Webb", wowthisis: "just ideas for next time", time: "14:00" },
  { kristinwatson: "Albertus Marque", wowthisis: "Hahahaha, Impossible", time: "14:00" },
];

export default function MessagePage() {
  const [searchBarValue3, setSearchBarValue3] = React.useState("");

  return (
    <>
      <Helmet>
        <title>AuctiGram</title>
        <meta name="description" content="web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700">
        <div className="flex items-start md:flex-col">
          <Sidebar11 />
          <div className="flex flex-1 items-center md:flex-col md:self-stretch md:p-5">
            <div className="w-[33%] md:w-full">
              <header className="flex items-center gap-[34px] self-end md:flex-col">
                <Input
                  color="gray_50"
                  shape="round"
                  name="search"
                  placeholder="Search chat"
                  value={searchBarValue3}
                  onChange={(e) => setSearchBarValue3(e.target.value)}
                  prefix={
                    <Img
                      src="images/img_contrast_gray_500.svg"
                      alt="contrast"
                      className="h-[24px] w-[24px] cursor-pointer"
                    />
                  }
                  suffix={
                    searchBarValue3?.length > 0 ? (
                      <CloseSVG onClick={() => setSearchBarValue3("")} height={24} width={24} fillColor="#93989aff" />
                    ) : null
                  }
                  className="m-[5px] w-[29%] gap-4 font-outfit tracking-[0.14px] md:w-full sm:pr-5"
                />
                <div className="flex flex-1 items-center justify-between gap-5 border-b-[0.5px] border-solid border-gray-100 bg-white-A700 py-[27px]">
                  <div className="ml-[7px] flex flex-col items-start justify-center gap-0.5">
                    <Heading size="md" as="h6" className="tracking-[0.18px]">
                      Jenny Wilson
                    </Heading>
                    <Text as="p" className="tracking-[0.14px] text-green-600_01">
                      Online
                    </Text>
                  </div>
                  <div className="mr-[7px] flex flex-row items-end justify-around gap-2.5">
                    <a href="#">
                      <Img src="images/img_contrast_gray_500.svg" alt="contrast" className="h-[24px] w-[24px]" />
                    </a>
                    <a href="#">
                      <Img src="images/img_sidebar_left.svg" alt="sidebarleft" className="h-[24px] w-[24px]" />
                    </a>
                    <a href="#">
                      <Img src="images/img_notification.svg" alt="notification" className="h-[24px] w-[24px]" />
                    </a>
                  </div>
                </div>
              </header>
              <div className="border-r-[0.5px] border-solid border-gray-100 bg-white-A700 pb-[98px] md:pb-5">
                <div className="flex flex-col items-center gap-5">
                  <div className="flex items-center justify-between gap-5 self-stretch bg-gray-900_26 p-5">
                    <div className="ml-3.5 flex w-[48%] items-center justify-center gap-3.5 md:ml-0">
                      <Img
                        src="images/img_ellipse_1018_7.png"
                        alt="circleimage"
                        className="h-[42px] w-[42px] rounded-[50%]"
                      />
                      <div className="flex flex-col items-start justify-center gap-[5px]">
                        <Heading as="h1" className="tracking-[0.16px]">
                          Jenny Wilson
                        </Heading>
                        <Text as="p" className="tracking-[0.14px]">
                          How are you?
                        </Text>
                      </div>
                    </div>
                    <Text size="s" as="p" className="mr-[13px] tracking-[0.12px] md:mr-0">
                      16:00
                    </Text>
                  </div>
                  <div className="flex w-[82%] flex-col gap-[39px] md:w-full">
                    <Suspense fallback={<div>Loading feed...</div>}>
                      {data.map((d, index) => (
                        <MessageRowkristin {...d} key={"message" + index} />
                      ))}
                    </Suspense>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 self-end bg-gray-50 py-[50px] md:self-stretch md:py-5">
              <div className="mb-[50px] flex flex-col items-center gap-[188px] md:gap-[141px] sm:gap-[94px]">
                <div className="flex w-[91%] md:w-full">
                  <div className="flex w-full flex-col items-start gap-7">
                    <div className="flex w-[56%] flex-col items-start justify-center gap-3.5 md:w-full">
                      <div className="self-stretch rounded-br-[10px] rounded-bl-[10px] rounded-tr-[10px] border border-solid border-gray-300 bg-gray-100 p-[9px]">
                        <Text as="p" className="font-normal leading-[180%] tracking-[0.14px] text-gray-900_e5">
                          <>
                            Amateurs think about how much money they can make.
                            <br />
                            Professionals think about how much money they could lose
                          </>
                        </Text>
                      </div>
                      <Text size="s" as="p" className="tracking-[0.12px]">
                        4:32 AM
                      </Text>
                    </div>
                    <div className="flex w-[85%] flex-col items-end gap-2.5 self-end md:w-full">
                      <div className="self-stretch rounded-bl-[12px] rounded-tl-[12px] rounded-tr-[12px] bg-gray-900_01 p-[13px]">
                        <Text as="p" className="font-normal leading-[180%] tracking-[0.14px] text-white-A700_e5">
                          <>
                            The price of a commodity will never go to zero. When you invest in commodities futures,
                            <br />
                            you are not buying a piece of paper that says you own an intangible of the company that
                            <br />
                            can go bankrupt.
                          </>
                        </Text>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Img src="images/img_frame_green_600_01.svg" alt="image" className="h-[24px] w-[24px]" />
                        <Text size="s" as="p" className="tracking-[0.12px]">
                          4:10 AM
                        </Text>
                      </div>
                    </div>
                    <div className="flex w-[56%] justify-center rounded-br-[10px] rounded-bl-[10px] rounded-tr-[10px] border border-solid border-gray-300 bg-gray-100 p-[9px]">
                      <Text as="p" className="w-full font-normal leading-[180%] tracking-[0.14px] text-gray-900_e5">
                        <>
                          Amateurs think about how much money they can make.
                          <br />
                          Professionals think about how much money they could lose
                        </>
                      </Text>
                    </div>
                    <div className="flex w-[89%] flex-col items-start justify-center gap-3.5 md:w-full">
                      <div className="self-stretch rounded-br-[10px] rounded-bl-[10px] rounded-tr-[10px] border border-solid border-gray-300 bg-gray-100 p-[9px]">
                        <Text as="p" className="font-normal leading-[180%] tracking-[0.14px] text-gray-900_e5">
                          <>
                            It's not always easy to do what's not popular, but that's where you make your money.
                            <br />
                            Buy stocks that look bad to less careful investors and hang on until their real value is
                            recognized.
                          </>
                        </Text>
                      </div>
                      <Text size="s" as="p" className="tracking-[0.12px]">
                        4:26 AM
                      </Text>
                    </div>
                    <div className="flex w-[87%] flex-col items-end gap-2.5 self-end md:w-full">
                      <div className="self-stretch rounded-bl-[12px] rounded-tl-[12px] rounded-tr-[12px] bg-gray-900_01 p-[13px]">
                        <Text as="p" className="font-normal leading-[180%] tracking-[0.14px] text-white-A700_e5">
                          <>
                            99%+ of traders don't care about Ferraris and yachts. They just want to pay their bills,
                            save a
                            <br /> little extra money, and sleep well at night. The only way to do that is to bat 70% or more.
                            <br />
                            Anything less, and these goals are nothing more than fantasy.
                          </>
                        </Text>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Img src="images/img_frame_green_600_01.svg" alt="image" className="h-[24px] w-[24px]" />
                        <Text size="s" as="p" className="tracking-[0.12px]">
                          5:22 AM
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch border-t-[0.5px] border-solid border-gray-100 bg-white-A700 p-4">
                  <Input
                    color="gray_50"
                    size="sm"
                    shape="round"
                    name="message"
                    placeholder="Write message"
                    prefix={<Img src="images/img_settings_gray_500.svg" alt="settings" className="h-[24px] w-[24px]" />}
                    suffix={<Img src="images/img_user_gray_900_01_24x24.svg" alt="user" className="h-[24px] w-[24px]" />}
                    className="gap-4 font-outfit tracking-[0.14px] sm:pr-5"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
